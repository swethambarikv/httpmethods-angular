import{InMemoryDbService} from 'angular-in-memory-web-api'  
export class TestData implements InMemoryDbService{  
    createDb(){  
  
        let BookDetails=[  
            // {id:100, name:'chaman gautam', Author:'C#corner',category:'Software devcelopment'},  
            // {id:101, name:'lucky gautam', Author:'Tpoint',category:'test'},  
            // {id:102, name:'Lakshya gautam', Author:'Google',category:' devcelopment'},  
            // {id:103, name:'ravi gautam', Author:'C#corner',category:'Software devcelopment'}  
            {id:100, team:'LAMP ', HRpartner:'Savitha',category:'Software developement'},  
            {id:101, team:'DOTNET', HRpartner:'Anitha',category:'Test'},  
            {id:102, team:'BFS', HRpartner:'Snigdha',category:' Developement'},  
            {id:103, team:'ORACLE', HRpartner:'Jaya',category:'Software developement'}  
             
        ];  
        return {  
            books:BookDetails  
        };  
    }  
  
}  