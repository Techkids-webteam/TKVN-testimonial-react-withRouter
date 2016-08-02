import React from 'react'
import { render } from 'react-dom'





// First we import some modules...
  import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router'


var Footer = React.createClass({
  render: function() {
      return (

          <div>
            <footer className="footer">
              <div className="container-fluid container">
                  <div className="row">
                      <div className="col-sm-3"><a href="#"><img src="img/Png.png" className="footer_logo"/></a>
                          <div className="row socials_list">
                              <a href="https://plus.google.com/u/2/" className="fa fa-google-plus-square col-sm-2"></a>
                              <a href="https://www.facebook.com/Techkids.Code.the.Change" className="fa fa-facebook-square col-sm-2"></a>
                              <a href="https://www.youtube.com/channel/UCkuxJcFwR-iFgThUPKwM_JA" className="fa fa-youtube col-sm-2"></a>
                          </div>
                      </div>
                      <div className="col-sm-3">
                          <h5>Về chúng tôi</h5>
                          <p>Chúng tôi ở đây để tạo ra những con người có thể thay đổi thế giới. TechKids không phải là một trung tâm đi dạy Lập trình kiếm tiền, hay một trường học chỉ đọc, chép từ bao thế hệ. Đây là một cộng đồng toàn cầu của những người sẵn sàng trở thành những người giỏi nhất, khác biệt nhất trong thế giới công nghệ.</p>
                      </div>
                      <div className="col-sm-3">
                          <h5>Tìm TechKids tại</h5>
                          <ul>
                              <li>TechHub Chùa Láng: Số 10, ngõ 121, Chùa Láng</li>
                              <li>TechHub Chùa Bộc: Số 101D, ngõ 95, Chùa Bộc</li>
                          </ul>
                          <p>Hotline: Ms. Ha: 0165 300 5670</p>
                          <p>Email: Techkidsvn@gmail.com</p>
                      </div>
                      <div className="col-sm-3">
                          <h5><a href="#">Khóa học tại TechKids</a></h5>
                          <ul>
                              <li><a href="#">Code For Kids      </a></li>
                              <li> <a href="#">Code For Everyone</a></li>
                              <li> <a href="#">Khóa học Lập trình iOS</a></li>
                              <li> <a href="#">Khóa học Lập trình Android</a></li>
                              <li> <a href="#">Khóa học Lập trình Fullstack Web </a></li>
                          </ul>
                      </div>
                  </div>
              </div>
          </footer>

          <button type="button" href ="#" className ="scrollToTop">↑</button>
          <div id ="fade-out" className="sticky_bottom_footer hidden-xs hidden-sm hidden-md">
              <div className="container">
                  <button type="button" id="close">×</button>
                  <img src="img/letter.png"/>
                  <h4>Nhận chương trình học miễn phí</h4>
                  <button type="button" className="register"><a href="#">ĐĂNG KÝ NGAY</a></button>
              </div>
          </div>
          <div className="mobile_bottom_footer hidden-lg">
              <div className="container">
                  <img src="img/letter.png"/>
                  <h4>Nhận chương trình học miễn phí</h4>
                  <button type="button" className="register"><a href="#">ĐĂNG KÝ NGAY</a></button>
              </div>
          </div>
        </div>

      );
    }
  });

render(
    <Footer/>,
    document.getElementById('footer')
  );
