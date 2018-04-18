class Customer{
	constructor(id,name,surname,age){
		this.id=id;
		this.name=name;
		this.surname=surname;
		this.age=age;
	}
}
class Table{
	constructor(){
		this.element=document.getElementById('pinakas');
		this.customers=[];
		this.base=this.element.innerHTML;
	}
	addCustomer(custom){
		this.customers.push(custom);
	}
	updateTable(){
		this.element.innerHTML=this.base;
		this.customers.forEach(
			function(item){
				var t=document.createElement('tr');
				t.innerHTML="<td style='text-align:center'>"+item.id+"</td><td style='text-align:center'>"+item.name+"</td><td style='text-align:center'>"
					+item.surname+"</td><td style='text-align:center'>"+item.age+"</td>";
				this.element.appendChild(t);
			}
		,this);
	}
}
class Controller{
	constructor(table){
		this.nameBox=document.getElementById('name');
		this.surnameBox=document.getElementById('surname');
		this.ageBox=document.getElementById('age');
		this.submitButton=document.getElementById('submitButton');
		this.table=table;
		Controller.currentId=0;
	}
	makeCustomer(){
		Controller.currentId+=1;
		var a=new Customer(
			Controller.currentId,this.nameBox.value,
			this.surnameBox.value,this.ageBox.value);
		this.nameBox.value="";
		this.surnameBox.value="";
		this.ageBox.value="";
		this.table.addCustomer(a);
		this.table.updateTable();
	}
}

var table = new Table();
var control = new Controller(table);

function derp(){
	control.makeCustomer();
}