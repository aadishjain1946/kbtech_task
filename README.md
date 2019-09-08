# kbtech_task
## 1. Login/Signup
    ### a) user signup/login-:
                 use http://localhost:4560/customerlogin with request body {'username':'test','password':'test'}
                 for new user it automatically update database and return token and for existing user it simply return token.
    ### b)Admin signup/login-:
                  use http://localhost:4560/adminlogin with request body {'username':'test','password':'test'}
                 for new user it automatically update database and return token and for existing user it simply return token.
    ### b)Delivery boy signup/login-:
                  use http://localhost:4560/deliverylogin with request body {'username':'test','password':'test'}
                 for new user it automatically update database and return token and for existing user it simply return token.
#### After login save the token and use that token for further request in request headers as {x-csrf-token:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyaWQiOiIxMjM0NTY3ODkiLCJpYXQiOjE1Njc5MzI1NzQsImV4cCI6MTU2ODAxODk3NH0.CfD2HkaxukFfp-2_eVCCeCnH5QYaNLwnC88ofZJvQeg"} 

# Customer
1. To place order
    use http://localhost:4560/customer/order and in request body give orders as array of object
      {'order':[{'item':'Chips','quantity':5}]}
      
# Admin
1. to view orders 
      use http://localhost:4560/admin/orders

2. to view delivery boys 
      use http://localhost:4560/admin/deliveryboys
      
3. to assign deliveryboy to order
      use http://localhost:4560/admin/assigndeliveryboy and in request body give orderid and delivery boy id
        {orderid:"123124252",deliveryboy:"1321242341"}
      
# Delivery boy

1. to view order assigned to him.
    use http://localhost:4560/delivery/orders
 
 2. to update status for order 
    use http://localhost:4560/delivery/updatestatus and in request body give
    
    {"orderid":"71971088179",	"status":"Reached Store"}
    
# i have used mongodb database and created 2 sample catalogue with item 'Chips' and 'Disprin'
