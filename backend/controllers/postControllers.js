const { v4: uuidv4 } = require('uuid');
const pool = require("../config/config");

const showPosts = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM posts ORDER BY likes DESC;");
    res.json(result.rows);
  } catch (error) {
    res.status(500).send("Error al obtener las publicaciones;");
  }
};

const insertPost = async (titulo, img, descripcion, likes) => {
  const consulta =
    "INSERT INTO posts (id, titulo, img, descripcion, likes) VALUES ($1, $2, $3, $4, $5) RETURNING *;";
  const values = [uuidv4(), titulo, img, descripcion, likes];
  try {
    const result = await pool.query(consulta, values);
    console.log("post agregado a la base de datos", result.rowCount);
    return result;
  } catch (error) {
    console.error("error al insertar el post en la base de datos:", error.message);
    throw error;
  }
};

const addPosts = async (req, res) => {
  const { titulo, img, descripcion, likes } = req.body;
  try {
    const result = await insertPost(titulo, img, descripcion, likes);
    res.json(result.rows[0]);
  } catch (error) {
    res.status(500).send("Error al agregar el post");
  }
};

const deletePosts = async (req, res) => {
  const { id } = req.params;
  try {
    const consulta = "DELETE FROM posts WHERE id = $1;";
    const values = [id];
    await pool.query(consulta, values);
    res.send("Post eliminado con éxito de la base de datos");
  } catch (error) {
    res.status(500).send("Error al eliminar el post de la base de datos");
  }
};

const changePosts = async (req, res) => {
  const { id } = req.params;
  const { titulo, img, descripcion, likes } = req.body;
  try {
    const { rows } = await pool.query("SELECT * FROM posts WHERE id = $1;", [id]);
    const postActual = rows[0];

    if (!postActual) {
      return res.status(404).send("Post no encontrado en la base de datos");
    }

    const newTitle = titulo !== undefined ? titulo : postActual.titulo;
    const newImg = img !== undefined ? img : postActual.img;
    const newDescription = descripcion !== undefined ? descripcion : postActual.descripcion;
    const newLikes = likes !== undefined ? likes : postActual.likes;

    const consulta = "UPDATE posts SET titulo = $1, img = $2, descripcion = $3, likes = $4 WHERE id = $5;";

    const values = [newTitle, newImg, newDescription, newLikes, id];
    await pool.query(consulta, values);
    res.send("Post modificado con éxito");
  } catch (error) {
    console.error("Error al modificar el post:", error);
    res.status(500).send("Error al modificar el post");
  }
};

const likePost = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query(
      "UPDATE posts SET likes = COALESCE(likes, 0) + 1 WHERE id = $1 RETURNING *;",
      [id]
    );
    if (result.rowCount === 0) {
      return res.status(404).json({ error: 'Post no encontrado' });
    }
    res.json({ message: 'Like agregado', post: result.rows[0] });
  } catch (error) {
    res.status(500).json({ error: 'Error al agregar like al post en la base de datos' });
  }
};

module.exports = {
  showPosts,
  addPosts,
  deletePosts,
  changePosts,
  likePost,
};
