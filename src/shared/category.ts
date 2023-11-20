import { Allow, Entity, Fields, Validators } from "remult";

@Entity("categories", {
  allowApiCrud: true,
  // allowApiCrud: Allow.authenticated,
  // allowApiInsert: "admin",
  // allowApiDelete: "admin"
})
export class Category {
  @Fields.autoIncrement()
  id = 0;
  @Fields.string()
  title = "";
}
