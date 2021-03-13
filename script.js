var wrap = document.body.querySelector(".wrap");
var list = [
  {
    name:"Bob",
    damage:2,
    health:10,
    warrior:true
  },
  {
    name:"Jerry",
    damage:1,
    health:12,
    warrior:true
  },
  {
    name:"Mavis",
    damage:2,
    health:10,
    warrior:true
  },
  {
    name:"Morty",
    damage:4,
    health:10,
    warrior:true
  },
  {
    name:"Shorty",
    damage:10,
    health:3,
    warrior:false
  },
  {
    name:"Porty",
    damage:1,
    health:14,
    warrior:true
  },{
    name:"Perry",
    damage:2,
    health:9,
    warrior:true
  },
  {
    name:"Larry",
    damage:2,
    health:17,
    warrior:false
  }
];
for(var i=0; i<list.length; i++){
  var ele = document.createElement("div");
  var eleName = document.createElement("h1");
  var eleDamage = document.createElement("h4");
  var eleHealth = document.createElement("h4");
  if (list [i].damage<2){
    ele.style.display="none";
  }
  if (list [i].health<10){
    ele.style.display="none";
  }
  if (list[i].warrior===false){
    ele.style.display="none";
  }
  if (list[i].name.includes("a")){
    ele.style.color="Red";
  }
  eleName.innerHTML=list[i].name;
  eleDamage.innerHTML="Damage: "+list[i].damage;
  eleHealth.innerHTML="Health: "+list[i].health;
  ele.appendChild(eleName);
  ele.appendChild(eleDamage);
  ele.appendChild(eleHealth);
  wrap.appendChild(ele);
}