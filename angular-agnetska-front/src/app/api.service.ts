import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseURL = "https://localhost:44324";

  constructor(private http: HttpClient) { }

  getAuthHeader() : any {

    const headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem("token")
    }

    return {
      headers: headers
    };
  }

  register(data: any) {
    return this.http.post(this.baseURL + "/api/user/register", data);
  }

  login(data: any) : any {
    return this.http.post(this.baseURL + "/api/auth/login", data);
  }

  getCurrentUser() : any {
    return this.http.get(this.baseURL + "/api/auth/current", this.getAuthHeader());
  }

  createCompany(data:any) : any {
      return this.http.post(this.baseURL + "/api/company/create",data, this.getAuthHeader());
  }

  getUnactivated() : any {
    return this.http.get(this.baseURL + "/api/company/getUnactivated", this.getAuthHeader());
}

activateCompany(data:any) : any {
    return this.http.put(this.baseURL + "/api/company/activateCompany/" + data.id,data,this.getAuthHeader());
}

updateCompany(data:any) : any {
    return this.http.put(this.baseURL + "/api/company/updateCompany",data,this.getAuthHeader());
}

addJob(data:any) : any {
    return this.http.post(this.baseURL + "/api/job/addJob",data, this.getAuthHeader());
}
addReview(data:any) : any {
    return this.http.post(this.baseURL + "/api/review/addReview",data, this.getAuthHeader());
}
getCompanyByUser() : any{
    return this.http.get(this.baseURL+ "/api/company/getCompanyByUser",this.getAuthHeader());
}

saveApiKey(data:any) : any{
    return this.http.post(this.baseURL+ "/api/apiKey/saveApiKey",data,this.getAuthHeader());
}

getAllJobs(): any
{
  return this.http.get(this.baseURL + "/api/job/all",this.getAuthHeader());
}

getReviewsByJobId(data:any): any
{
  return this.http.get(this.baseURL + "/api/review/getReviewsByJobId/" + data.id ,data);
}

get(data:any):any{
  return this.http.get(this.baseURL +"/api/job/get/" + data.id,data);
}



getJobsByUserId(data:any):any{
  return this.http.get(this.baseURL + "/api/job/getJobsByUserId/" + data.id,data);
}
getApiKeyByUserId(data:any):any{
  return this.http.get(this.baseURL + "/api/apiKey/getApiKeyByUserId/"+ data.id,data);
}

addJobDontShare(data:any)
{
  return this.http.post(this.baseURL + "/api/job/addJobWithoutPublish",data,this.getAuthHeader());

}

getUserFromLocalstorage() {

  let userString = localStorage.getItem('user');

  if(!userString) {
    return null;
  }

  return JSON.parse(userString);
}

}