import {promises as fs} from 'fs';

const datetime = new Date().toISOString();
const fileName = `./messages/${datetime}.txt`;


const run = async () =>{
  try{
    await fs.mkdir('./messages');
    await fs.writeFile(fileName, 'Your messages');
  }catch (err){
    console.error(err);
  }
};

void run();