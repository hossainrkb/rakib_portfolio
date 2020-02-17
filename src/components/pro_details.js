import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Redirect } from "react-router-dom";
class Project_details extends Component {
  //this.props.match.params.pd_id
  state = {
      id :2
  }
  componentDidUpdate(){
    this.setState({
      id: this.props.match.params.pd_id
    });
  }
    render() {
        
        if (this.props.match.params.pd_id == 1) {
          console.log(this.props.match.params.pd_id);
          return (
            <div className="row">
              <div className="col-md-12">
                <hr className="btn-warning" />
                <div className="row">
                  <div className="col-md-12">
                    <Carousel stopOnHover={false} showThumbs={false} autoPlay={true}>
                      <div>
                        <img
                          height="500"
                          src={require("../project_pf/blood/blood_serach1.PNG")}
                        />
                      </div>
                      <div>
                        <img
                          height="500"
                          src={require("../project_pf/blood/blood_serach.PNG")}
                        />
                      </div>
                      <div>
                        <img
                          height="500"
                          src={require("../project_pf/blood/send_blood_req.PNG")}
                        />
                      </div>
                      <div>
                        <img
                          height="500"
                          src={require("../project_pf/blood/donor_home.PNG")}
                        />
                      </div>
                      <div>
                        <img
                          height="500"
                          src={require("../project_pf/blood/donate_HISTORY.PNG")}
                        />
                      </div>
                      <div>
                        <img
                          height="500"
                          src={require("../project_pf/blood/blood_req.PNG")}
                        />
                      </div>
                      <div>
                        <img
                          height="500"
                          src={require("../project_pf/blood/req_details.PNG")}
                        />
                      </div>
                      <div>
                        <img
                          height="500"
                          src={require("../project_pf/blood/blood_donate.PNG")}
                        />
                      </div>
                      <div>
                        <img
                          height="500"
                          src={require("../project_pf/blood/admin_home.PNG")}
                        />
                      </div>
                    </Carousel>
                  </div>
                </div>
              </div>
            </div>
          );
        } else if (this.props.match.params.pd_id == 2) {
                 return (
                   <div className="row">
                     <div className="col-md-12">
                       <hr className="btn-warning" />
                       <div className="row">
                         <div className="col-md-12">
                           <Carousel stopOnHover={false} showThumbs={false} autoPlay={true}>
                             <div>
                               <img
                                 height="500"
                                 src={require("../project_pf/showroom/home_showroom.PNG")}
                               />
                             </div>
                             <div>
                               <img
                                 height="500"
                                 src={require("../project_pf/showroom/cart.PNG")}
                               />
                             </div>
                             <div>
                               <img
                                 height="500"
                                 src={require("../project_pf/showroom/cart_confirm.PNG")}
                               />
                             </div>
                             <div>
                               <img
                                 height="500"
                                 src={require("../project_pf/showroom/order_successfull.PNG")}
                               />
                             </div>
                             <div>
                               <img
                                 height="500"
                                 src={require("../project_pf/showroom/invoice.PNG")}
                               />
                             </div>
                             <div>
                               <img
                                 height="500"
                                 src={require("../project_pf/showroom/make_payment.PNG")}
                               />
                             </div>
                             <div>
                               <img
                                 height="500"
                                 src={require("../project_pf/showroom/discount.PNG")}
                               />
                             </div>
                             <div>
                               <img
                                 height="500"
                                 src={require("../project_pf/showroom/print_copy.PNG")}
                               />
                             </div>
                             <div>
                               <img
                                 height="500"
                                 src={require("../project_pf/showroom/product_stock.PNG")}
                               />
                             </div>
                             <div>
                               <img
                                 height="500"
                                 src={require("../project_pf/showroom/sales_report.PNG")}
                               />
                             </div>
                           </Carousel>
                         </div>
                       </div>
                     </div>
                   </div>
                 );
               }
               else if (this.props.match.params.pd_id == 3) {
                    return (
                      <div className="row">
                        <div className="col-md-12">
                          <hr className="btn-warning" />
                          <div className="row">
                            <div className="col-md-12">
                              <Carousel stopOnHover={false} showThumbs={false} autoPlay={true}>
                                <div>
                                  <img
                                    height="500"
                                    src={require("../project_pf/library/homa.PNG")}
                                  />
                                </div>
                                <div>
                                  <img
                                    height="500"
                                    src={require("../project_pf/library/add_book.PNG")}
                                  />
                                </div>
                                <div>
                                  <img
                                    height="500"
                                    src={require("../project_pf/library/addstuden.PNG")}
                                  />
                                </div>
                                <div>
                                  <img
                                    height="500"
                                    src={require("../project_pf/library/book_list.PNG")}
                                  />
                                </div>
                                <div>
                                  <img
                                    height="500"
                                    src={require("../project_pf/library/std_list.PNG")}
                                  />
                                </div>
                                <div>
                                  <img
                                    height="500"
                                    src={require("../project_pf/library/issue.PNG")}
                                  />
                                </div>
                                <div>
                                  <img
                                    height="500"
                                    src={require("../project_pf/library/issue_book list.PNG")}
                                  />
                                </div>
                                <div>
                                  <img
                                    height="500"
                                    src={require("../project_pf/library/return.PNG")}
                                  />
                                </div>
                                <div>
                                  <img
                                    height="500"
                                    src={require("../project_pf/library/find.PNG")}
                                  />
                                </div>
                              </Carousel>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                    }
                    else if(this.props.match.params.pd_id == 4){
                       return (
                         <div className="row">
                           <div className="col-md-12">
                             <hr className="btn-warning" />
                             <div className="row">
                               <div className="col-md-12">
                                 <Carousel stopOnHover={false} showThumbs={false} autoPlay={true}>
                                   <div>
                                     <img
                                       height="500"
                                       src={require("../project_pf/upliftbd/agent panel/agent login.PNG")}
                                     />
                                   </div>
                                   <div>
                                     <img
                                       height="500"
                                       src={require("../project_pf/upliftbd/agent panel/home.PNG")}
                                     />
                                   </div>
                                   <div>
                                     <img
                                       height="500"
                                       src={require("../project_pf/upliftbd/agent panel/member_list.PNG")}
                                     />
                                   </div>
                                   <div>
                                     <img
                                       height="500"
                                       src={require("../project_pf/upliftbd/agent panel/info.PNG")}
                                     />
                                   </div>
                                   <div>
                                     <img
                                       height="500"
                                       src={require("../project_pf/upliftbd/agent panel/add_fund.PNG")}
                                     />
                                   </div>
                                   <div>
                                     <img
                                       height="500"
                                       src={require("../project_pf/upliftbd/agent panel/dps.PNG")}
                                     />
                                   </div>
                                   <div>
                                     <img
                                       height="500"
                                       src={require("../project_pf/upliftbd/agent panel/dofdr.PNG")}
                                     />
                                   </div>
                                   <div>
                                     <img
                                       height="500"
                                       src={require("../project_pf/upliftbd/agent panel/deposit_his.PNG")}
                                     />
                                   </div>
                                   <div>
                                     <img
                                       height="500"
                                       src={require("../project_pf/upliftbd/agent panel/expense_his.PNG")}
                                     />
                                   </div>
                                   <div>
                                     <img
                                       height="500"
                                       src={require("../project_pf/upliftbd/agent panel/summary.PNG")}
                                     />
                                   </div>
                                   <div>
                                     <img
                                       height="500"
                                       src={require("../project_pf/upliftbd/agent panel/fund_transfer.PNG")}
                                     />
                                   </div>
                                   <div>
                                     <img
                                       height="500"
                                       src={require("../project_pf/upliftbd/agent panel/withdrow.PNG")}
                                     />
                                   </div>
                                   <div>
                                     <img
                                       height="500"
                                       src={require("../project_pf/upliftbd/agent panel/withdrow_historyy.PNG")}
                                     />
                                   </div>
                                   
                                 </Carousel>
                               </div>
                             </div>
                           </div>
                         </div>
                       ); 
                    }
                    else{
                        return <Redirect to="/proj" />;
                    }
         
  }
}

export default Project_details;
