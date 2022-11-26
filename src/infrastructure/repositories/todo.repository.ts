import { TodoRepository } from '@/domain/repositories/todoRepository.interface';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Todo } from '../entities/todo.entity';
import { TodoModel } from '../../domain/model/todo';

export class DatabaseTodoRepository implements TodoRepository {
  constructor(
    @InjectRepository(Todo)
    private readonly todoEntityRepository: Repository<Todo>,
  ) {}

  async insert(todo: TodoModel): Promise<void> {
    const todoEntity = this.toTodoEntity(todo);
    await this.todoEntityRepository.insert(todoEntity);
  }

  async findAll(): Promise<TodoModel[]> {
    const todosEntity = await this.todoEntityRepository.find();
    return todosEntity.map((todoEntity) => this.toTodo(todoEntity));
  }

  async findById(id: number): Promise<TodoModel> {
    const todoEntity = await this.todoEntityRepository.findOneByOrFail({ id });

    return this.toTodo(todoEntity);
  }

  async updatedContent(id: number, isDone: boolean): Promise<void> {
    await this.todoEntityRepository.update(id, { isDone });
  }

  async deleteById(id: number): Promise<void> {
    await this.todoEntityRepository.delete({ id });
  }

  private toTodo(todoEntity: Todo): TodoModel {
    const todo: TodoModel = new TodoModel();

    Object.assign(todo, { ...todoEntity });

    return todo;
  }

  private toTodoEntity(todo: TodoModel): Todo {
    const todoEntity: Todo = new Todo();

    Object.assign(todoEntity, { ...todo });

    return todoEntity;
  }
}
