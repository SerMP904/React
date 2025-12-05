import usersMock from "./usersMock";

export const getUsers = async () => {
    const dataUsers = await { ...usersMock}
    return dataUsers;
}
