
const fs = require('fs/promises')

// const myFileWriter = async (fileName, fileContent) => {
// 	// write code here
//  const data = await	fs.writeFile(fileName,fileContent,(err,data)=> {
// 	if(err){
// 		console.log(err)
// 	}else{
// 		console.log(data)

// 	}
//  })
// 	// dont chnage function name
// }

// const myFileReader = async (fileName) => {
// 	// write code here
// const data=	 await fs.readFile(fileName, { encoding: "utf-8" })
// console.log(data)
// 	// dont chnage function name
// }


// const myFileUpdater = async (fileName, fileContent) => {
// 	// write code here
// const data = await	fs.appendFile(fileName, fileContent)
// console.log(data)

// 	// dont chnage function name
// }

const myFileDeleter = async (fileName) => {
	// write code here
const data = await	fs.unlink(fileName)

	// dont chnage function name
}

// myFileWriter("file.txt","this is my 1st file")
// myFileReader("file.txt")
// myFileUpdater("file.txt","/nI appended the new information into the file2")
myFileDeleter("file.txt")


// module.exports = { myFileWriter, myFileUpdater, myFileReader,myFileDeleter }