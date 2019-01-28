import { rest } from './rest';

const getTasks = () => rest.get('tasks');

export { getTasks };
