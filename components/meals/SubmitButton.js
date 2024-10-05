import { useFormStatus } from "react-dom";
export default function SubmitButton() {
  const { pending: isPending } = useFormStatus();

  return (
    <button disable={isPending} type="submit">
      {isPending ? "submitting..." : "Share Meal"}
    </button>
  );
}
