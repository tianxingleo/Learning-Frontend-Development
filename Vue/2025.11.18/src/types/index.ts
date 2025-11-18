//定义一个接口用于限制person对象的具体属性
export interface PersonInter {
    id:string
    name:string
    age:number
}


//一个自定义类型
//type Persons =Array<PersonInter>
export type Persons =PersonInter[]