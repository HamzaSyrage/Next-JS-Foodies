import Image from "next/image";
import classes from "./page.module.css";
import { getMeal } from "@/lib/meals";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
  const { title, summary, creator } = getMeal(params.mealSlug);
  return {
    title,
    author: creator,
    description: summary,
  };
}

export default function MealSlugPage({ params }) {
  if (!getMeal(params.mealSlug)) {
    notFound();
  }
  const { title, image, summary, creator, instructions, creator_email } =
    getMeal(params.mealSlug);
  const fixedInstructions = instructions.trim().split(`\n`).join(" <br/>");

  return (
    <>
      <header className={classes.header}>
        <div className={classes.image}>
          <Image draggable="false" src={image} alt={title} fill />
        </div>
        <div className={classes.headerText}>
          <h2>{title}</h2>
          <p className={classes.creator}>
            by <a href={`mailto:${creator_email}`}>{creator}</a>
          </p>
          <p className={classes.summary}>{summary}</p>
        </div>
      </header>
      <main>
        <p
          className={classes.instructions}
          dangerouslySetInnerHTML={{ __html: fixedInstructions }}
        ></p>
      </main>
    </>
  );
}
