import Image from "next/image";
import classes from "./page.module.css";
import { getAllMeals, getMeal } from "@/lib/meals";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
	const meals = await getAllMeals();

	return meals.map((meal) => ({
		mealSlug: meal.slug,
	}));
}

export async function generateMetadata({ params }) {
	const meal = await getMeal(params.mealSlug);

	if (!meal) return { title: "Meal Not Found" };

	return {
		title: meal.title,
		description: meal.summary,
		authors: [{ name: meal.creator }],
	};
}

export default async function MealSlugPage({ params }) {
	const meal = await getMeal(params.mealSlug);

	if (!meal) notFound();

	const fixedInstructions = (meal.instructions || "")
		.trim()
		.split("\n")
		.join(" <br/>");

	return (
		<>
			<header className={classes.header}>
				<div className={classes.image}>
					<Image draggable="false" src={meal.image} alt={meal.title} fill />
				</div>
				<div className={classes.headerText}>
					<h2>{meal.title}</h2>
					<p className={classes.creator}>
						by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
					</p>
					<p className={classes.summary}>{meal.summary}</p>
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
