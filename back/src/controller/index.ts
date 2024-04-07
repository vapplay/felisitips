import { Response, Request } from "express";
import { Phrase, Theme } from "../db/models/models";
import { Op } from "sequelize";

const addPhrase = async (req: Request, res: Response) => {
  const { by, phrase } = req.body;
  if (!by && !phrase)
    res.status(400).json({
      error: "not found",
    });
  try {
    console.log(phrase);

    await Phrase.create({
      by,
      phrase,
    });

    res.status(200).json({
      state: "ok",
    });
  } catch (error) {
    res.status(500).send("internal server error");
  }
};

const addTheme = async (req: Request, res: Response) => {
  const { name, url } = req.body;
  if (!name && !url)
    res.status(400).json({
      error: "not found",
    });
  try {
    await Theme.create();

    res.status(200).json({
      state: "ok",
    });
  } catch (error) {
    res.status(500).send("internal server error");
  }
};

const getAllPhrase = async (req: Request, res: Response) => {
  try {
    const phrase = await Phrase.findAll();
    res.status(200).json(phrase);
  } catch (error) {
    res.status(500).send("internal server error");
  }
};

const getAllThemes = async (req: Request, res: Response) => {
  try {
    const theme = await Theme.findAll();
    res.status(200).json(theme);
  } catch (error) {
    res.status(500).send("internal server error");
  }
};

const dropPhrase = async (req: Request, res: Response) => {
  try {
    const id = req.query.id;

    if (!id) {
      return res.status(400).json({ error: "ID is required" });
    }
    const deletedCount = await Phrase.destroy({ where: { id } });
    if (deletedCount === 0) {
      return res.status(404).json({ error: "Phrase not found" });
    }

    res.status(200).json({ message: "Phrase deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal server error");
  }
};

const dropTheme = async (req: Request, res: Response) => {
  try {
    const id = req.query.id;

    if (!id) {
      return res.status(400).json({ error: "ID is required" });
    }
    const deletedCount = await Theme.destroy({ where: { id } });
    if (deletedCount === 0) {
      return res.status(404).json({ error: "Phrase not found" });
    }

    res.status(200).json({ message: "Phrase deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal server error");
  }
};

const updatePhrase = async (req: Request, res: Response) => {
  const { by, phrase, id } = req.body;
  if (!by && !phrase && !id)
    res.status(400).json({
      error: "not found",
    });
  try {
    console.log(phrase);

    await Phrase.update(
      {
        by,
        phrase,
      },
      {
        where: {
          id,
        },
      }
    );

    res.status(200).json({
      state: "ok",
    });
  } catch (error) {
    res.status(500).send("internal server error");
  }
};

const searchAllPhrase = async (req: Request, res: Response) => {
  try {
    const term = req.query.term;

    if (!term) {
      return res.status(400).json({ error: "Search term is required" });
    }

    const phrases = await Phrase.findAll({
      where: {
        phrase: {
          [Op.like]: `%${term}%`,
        },
      },
    });

    res.status(200).json(phrases);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal server error");
  }
};

export {
  addPhrase,
  addTheme,
  getAllPhrase,
  getAllThemes,
  dropPhrase,
  dropTheme,
  updatePhrase,
  searchAllPhrase,
};
