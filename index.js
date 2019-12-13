// Write your solution in this file!
let driver={};

function updateDriverWithKeyAndValue(driver,key,value){
  let newDri;
 const newDri = {...driver};
    newDri[key]=value;
    return newDri;

}
function destructivelyUpdateDriverWithKeyAndValue(driver,key,value){
  driver[key]=value;
  return driver;
}

function deleteFromDriverByKey(driver,key){
  delete driver[key]
  return driver
}
