import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  date:any;

  RoomDet:any =[];

ngOnInit(): void {
  this.AddRoom()
}

  AddRoom(){
    if(this.RoomDet.length < 4){
    let obj =
    {
     RoomNo:'ROOM',
     NoAdults:1,
     NoChilldrens:1,
     Text1:'No of Adults',
     Text2:'No of Children',
     minus:false,
     add:false,
     childrenadd:false,
     childrenminus:false,
    }
    this.RoomDet.push(obj)
  }else{
    alert('Bulk order booking ')
  }
  }


  add(type:any,i:any){
   if(type == 'adult'){
    this.RoomDet[i].NoAdults += 1;
    if( this.RoomDet[i].NoAdults >= 4){
      this.RoomDet[i].add = true;
      this.RoomDet[i].minus = false;
    }
   }else{
    this.RoomDet[i].NoChilldrens += 1;
    if( this.RoomDet[i].NoChilldrens >= 4){
      this.RoomDet[i].childrenadd = true;
      this.RoomDet[i].childrenminus = false;
    }
   }

  }
  minus(type:any,i: any){
   if(type == 'adult'){
    this.RoomDet[i].NoAdults -= 1;
    if(this.RoomDet[i].NoAdults == 0){
      this.RoomDet[i].minus = true;
      this.RoomDet[i].add = false;
    }
   }else{
    this.RoomDet[i].NoChilldrens -= 1;
    if(this.RoomDet[i].NoChilldrens == 0){
      this.RoomDet[i].childrenminus = true;
      this.RoomDet[i].childrenadd = false;
    }
   }

  
}
DeletRow(i:any){
  this.RoomDet.splice(i,1)
 }


 isClicked: boolean = false;


}
