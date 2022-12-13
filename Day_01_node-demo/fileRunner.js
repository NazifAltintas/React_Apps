//importing fs package from node
var fileSystem = require("fs"); //import { copyFileSync } from "fs";

//using copyFileSyync method to copy the existing file
fileSystem.copyFileSync("file.txt", "copyFile.txt");
