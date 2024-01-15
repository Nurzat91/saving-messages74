import fs from 'fs';

const datetime = new Date().toISOString();
const fileName = `${datetime}.txt`;

const run = async () =>{
  try{
    await fs.promises.mkdir('./messages');
    await fs.promises.writeFile(fileName, 'Your messages');
  }catch (err){
    console.error(err);
  }
};

void run();