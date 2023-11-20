import { Allow, Entity, Fields, Validators, Relations } from "remult";
import { Category } from "./category";

@Entity("tasks", {
  allowApiCrud: true,
  // allowApiCrud: Allow.authenticated,
  // allowApiInsert: "admin",
  // allowApiDelete: "admin"
})
export class Task {
  @Fields.autoIncrement()
  id = 0;
  @Fields.string<Task>({
    validate: (task) => {
      if (task.title.length < 3) throw Error("Too short");
    },
  })
  title = "";
  @Fields.boolean()
  completed = false;

  @Fields.number({ allowNull: true })
  categoryId?: number;

  @Relations.toOne(() => Category, { field: "categoryId" })
  category?: Category;
}
