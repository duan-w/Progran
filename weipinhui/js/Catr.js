class Cart{
			take(){
				if(window.localStorage){
					this.storage=window.localStorage.getItem("段海峰");
					if(!this.storage){
						this.storage=[];
					}else{
						this.storage=JSON.parse(this.storage)
					}
					//console.log(this.storage)
					return true;	
				}else{
					return false;
				}
			}
			save(){
				window.localStorage.setItem("段海峰",JSON.stringify(this.storage))
				//将字面量对象转为字符串
			}
			push(_identify,_count,_comment){
				if(this.take()){
					let not=0;
					for(let i=0;i<this.storage.length;i++){
					//	console.log(this.storage[i].counter)
						if(this.storage[i].ID===_identify&&this.storage[i].comment===_comment){
							
							this.storage[i].counter+=_count; 
							not=1;
							break;
						}    
					}
					if(!not){
						this.storage.push({
							"ID":_identify,
							"counter":_count,
							"comment":_comment,
		
						})
					}
					this.save();
					console.log(this.storage)
				}
			}
			subtract(_identify,_count,_comment){
				if(this.take()){
					for(let i=0;i<this.storage.length;i++){
						if(this.storage[i].counter>_count){
							this.storage[i].counter-=_count;
							break;
						}
					}
					this.save();
				}
			}
			remove(_identify,_comment){
				if(this.take()){
					for(let i=0;i<this.storage.length;i++){
						if(this.storage[i].ID===_identify&&this.storage[i].comment==_comment){
							this.storage.splice(i,1);
							break;
						}
					}
					this.save()
				}
			
			}
			sum(){
				if(this.take()){
					let sum=0;
					for(let i=0;i<this.storage.length;i++){
						sum+=this.storage[i].counter;
					}
					return sum;
				}
			}
			change(_identify,_count,_comment){
				if(this.take()&&/^[1-9]\d*$/g.test(_count+"")){
					for(let i=0;i<this.storage.length;i++){
						if(this.storage[i].ID===_identify&&this.storage[i].comment===_comment){
							this.storage[i].comment=_count;
							break;
						}
					}
					this.save();
				}
				
			}
		}