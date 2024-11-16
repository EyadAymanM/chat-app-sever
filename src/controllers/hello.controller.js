export const helloWorld = async(req, res) => {
    res.status(200).json({message: "success", data:"Hello World!"})
};