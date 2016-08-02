import React from 'react'
import { render } from 'react-dom'





// First we import some modules...
  import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router'


var Middle = React.createClass({
  render: function() {
      return (
        <div>
          <div className="background img-responsive">
              <div className="col-lg-12 visible-lg img_content_big">
                  <h1>CÙNG GẶP GỠ NHỮNG TECHKIDS NHÉ!</h1>
                  <p>Những dòng yêu thương từ gần 300 người, kể làm sao hết...</p>
              </div>
              <div className="col-md-12 col-sm-12 hidden-lg hidden-xs img_content_medium">
                  <h1>CÙNG GẶP GỠ NHỮNG TECHKIDS NHÉ!</h1>
                  <p>Những dòng yêu thương từ gần 300 người, kể làm sao hết...</p>
              </div>
              <div className="col-xs-12 hidden-lg hidden-md hidden-sm img_content_small">
                  <h1>CÙNG GẶP GỠ NHỮNG TECHKIDS NHÉ!</h1>
                  <p>Những dòng yêu thương từ gần 300 người, kể làm sao hết...</p>
              </div>
          </div>
          {/*<!-- **************************************DESKTOP************************************ -->*/}
          <div className = "visible-lg comments_big">
              <div className="MAD_comment">
                  <div className="container">
                      <div className="row">
                          <div className="col-sm-3 header">
                              <img src="img/Polygon 1.png"/>
                              <p>Mobile apps development (MAD)</p>
                          </div>
                          <div className="col-sm-9 author_list">
                              <div className="authorMAD"></div>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="web_comment">
                  <div className="container">
                      <div className="row">
                          <div className="col-sm-3 header">
                              <img src="img/Polygon 2.png"/>
                              <p>Full-stack web developer</p>
                          </div>
                          <div className="col-sm-9 author_list">
                              <div className="authorWeb"></div>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="c4e_comment">
                  <div className="container">
                      <div className="row">
                          <div className="col-sm-3 header">
                              <img src="img/Polygon 1.png"/>
                              <p>Code for everyone</p>
                          </div>
                          <div className="col-sm-9 author_list">
                              <div className="authorC4E"></div>
                          </div>
                      </div>
                      </div>
                  </div>
              </div>
          <div/>
          <div className = "visible-lg comments_big">
              <div className="MAD_comment">
                  <div className="container">
                      <div className="row">
                          <div className="col-sm-3 header">
                              <img src="img/Polygon 1.png"/>
                              <p>Mobile apps development (MAD)</p>
                          </div>
                          <div className="col-sm-9 author_list">
                              <div className="authorMAD"></div>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="web_comment">
                  <div className="container">
                      <div className="row">
                          <div className="col-sm-3 header">
                              <img src="img/Polygon 2.png"/>
                              <p>Full-stack web developer</p>
                          </div>
                          <div className="col-sm-9 author_list">
                              <div className="authorWeb"></div>
                          </div>

                      </div>
                  </div>
              </div>
              <div className="c4e_comment">
                  <div className="container">
                      <div className="row">
                          <div className="col-sm-3 header">
                              <img src="img/Polygon 1.png"/>
                              <p>Code for everyone</p>
                          </div>
                          <div className="col-sm-9 author_list">
                              <div className="authorC4E"></div>
                          </div>
                      </div>
                      </div>
                  </div>
              </div>
          <div/>
          {/*<!-- ************************************TABLET************************************************ -->*/}
          <div className = "visible-xs comments_small">
            <div className="MAD_comment">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-3 header">
                            <img src="img/Polygon 1.png"/>
                            <p>Mobile apps development (MAD)</p>
                        </div>
                        <div className="col-sm-9 author_list">
                            <div id="myCarousel_MAD_xs" className="carousel slide" data-ride="carousel">
                                <div className="carousel-inner" role="listbox">

                                    <div className="authorMAD-small"></div>

                                </div>
                                <a className="left carousel-control" href="#myCarousel_MAD_xs" role="button" data-slide="prev">
                                    <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                                    <span className="sr-only">Previous</span>
                                </a>
                                <a className="right carousel-control" href="#myCarousel_MAD_xs" role="button" data-slide="next">
                                    <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                                    <span className="sr-only">Next</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="web_comment">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-3 header">
                            <img src="img/Polygon 2.png"/>
                            <p>Full-stack web developer</p>
                        </div>
                        <div className="col-sm-9 author_list">
                            <div id="myCarousel_web_xs" className="carousel slide" data-ride="carousel">
                                <div className="carousel-inner" role="listbox">

                                    <div className="authorWeb-small"></div>

                                </div>
                                <a className="left carousel-control" href="#myCarousel_web_xs" role="button" data-slide="prev">
                                    <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                                    <span className="sr-only">Previous</span>
                                </a>
                                <a className="right carousel-control" href="#myCarousel_web_xs" role="button" data-slide="next">
                                    <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                                    <span className="sr-only">Next</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="c4e_comment">
                <div className="container">
                  <div className="row">
                    <div className="col-sm-3 header">
                        <img src="img/Polygon 1.png"/>
                        <p>Code for everyone</p>
                    </div>
                    <div className="col-sm-9 author_list">
                      <div id="myCarousel_c4e_xs" className="carousel slide" data-ride="carousel">
                          <div className="carousel-inner" role="listbox">
                              <div className="authorC4E-small"></div>
                          </div>
                          <a className="left carousel-control" href="#myCarousel_c4e_xs" role="button" data-slide="prev">
                              <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                              <span className="sr-only">Previous</span>
                          </a>
                          <a className="right carousel-control" href="#myCarousel_c4e_xs" role="button" data-slide="next">
                              <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                              <span className="sr-only">Next</span>
                          </a>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
          </div>
          {/*==============================DONE ====================================*/}
          <div className="col-xs-12 col-md-12 about_us">
              <h3>Và còn gần 300 học viên xuất sắc, tài năng, đáng yêu của Techkids nữa...</h3>
              <p>
                  "Techkids không làm mình lập tức trở thành siêu sao, nhưng đã cho mình thấy một con đường rộng mở, <br/> cho mình thêm niềm tin để tiếp tục bước trên con đường đã chọn ấy, và mang đến cho mình <br/> Những người bạn vô cùng tuyệt vời."
              </p>
              <p>
                  "Techkids làm cuộc đời tao thay đổi thật mày ạ."
              </p>
          </div>
          <div className="col-xs-12 col-md-12 find_us">
              <h3 className="title"><before/> CÙNG TECHKIDS<after/></h3>
              <p className = "sub_title">
                  viết những dòng code thay đổi cuộc đời bạn
              </p>
              <button type="button">TÌM HIỂU CÁC KHÓA HỌC</button>
          </div>

        </div>

      );
    }
  });

render(
    <Middle/>,
    document.getElementById('middle')
  );
