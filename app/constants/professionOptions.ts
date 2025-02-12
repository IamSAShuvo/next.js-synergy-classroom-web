export type ProfessionValue = "student" | "teacher";

export interface ProfessionOption {
  value: ProfessionValue;
  label: string;
}

const PROFESSION_OPTIONS: readonly ProfessionOption[] = [
  { value: "student", label: "Student" },
  { value: "teacher", label: "Teacher" },
] as const;

export default PROFESSION_OPTIONS;
