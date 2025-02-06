export default defineEventHandler( async (event) => {

    const { name } = getQuery(event)

    const { age } = await readBody(event)

    return {
       message: `Hello, ${name}. You are ${age} years old.`
    };
});