import { remultSveltekit } from "remult/remult-sveltekit";
import { Task } from "../shared/task";
import { TasksController } from "../shared/tasksController";
import { remult, type UserInfo } from "remult";
import { Category } from "../shared/category";

export const handleRemult = remultSveltekit({
  entities: [Task, Category],
  controllers: [TasksController],

  initApi: async () => {
    // try {
    //   const c1 = await remult.repo(Category).insert({ title: "cat1" });
    //   const t1 = await remult
    //     .repo(Task)
    //     .insert({ title: "task1", category: c1 });

    //   await remult.repo(Task).insert({ title: "task2" });
    // } catch (error) {
    //   console.log(`error`, error);
    // }

    const result = await remult
      .repo(Task)
      .find({ include: { category: true } });
    console.log(`result`, result);
  },
});
