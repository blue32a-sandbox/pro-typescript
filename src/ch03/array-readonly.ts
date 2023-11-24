// readonly T[]
const arr: readonly number[] = [1, 10, 100];
// もしくは ReadonlyArray<T>
// const arr: ReadonlyArray<number> = [1, 10, 100];

// error: Index signature in type 'readonly number[]' only permits reading.
// arr[1] = -500;

// error: Property 'push' does not exist on type 'readonly number[]'.
// arr.push(1000);

const arr1: number[] = [1, 10, 100];
arr1[1] = -500;
arr1.push(1000);
console.log(arr1);
