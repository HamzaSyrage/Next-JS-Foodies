import classes from "./page.module.css";
import MealsGrid from "@/components/meals/meals-grid";
import { getAllMeals } from "@/lib/meals";
import Link from "next/link";
import { Suspense } from "react";
async function Meals() {
  const meals = await getAllMeals();
  return <MealsGrid meals={meals} />;
}
export default function MealPage() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious Meals Created
          <span className={classes.highlight}> By You</span>
        </h1>
        <p>chose your favorite recipe and cook it yourself, and enjoy</p>
        <p className={classes.cta}>
          <Link href={"meals/share"}>share Your favorite recipe</Link>
        </p>
      </header>
      <main className={classes.cta}>
        <Suspense fallback={<div class={classes.loader}></div>}>
          <Meals />
        </Suspense>
      </main>
    </>
  );
}
