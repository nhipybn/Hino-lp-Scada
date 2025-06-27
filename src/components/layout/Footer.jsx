const Footer = () => {
  return (
    <footer className="bg-primary text-white py-16">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <img src="/logo1.png" alt="Logo" className="h-30 w-auto" /> 
            </div>
            <p className="text-white">
              Nhà tích hợp hệ thống hàng đầu các giải pháp tự động hóa quy trình (PA) và tự động hóa nhà máy (FA).
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Liên kết nhanh</h3>
            <ul className="space-y-3 text-white">
              <li><a href="#about" className="hover:text-primary transition-colors">Giới thiệu</a></li>
              <li><a href="#giai phap" className="hover:text-primary transition-colors">Giải pháp</a></li>
              <li><a href="#du-an" className="hover:text-primary transition-colors">Case Study</a></li>
            
              <li><a href="#contact" className="hover:text-primary transition-colors">Liên hệ</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Liên hệ</h3>
            <ul className="space-y-3 text-white">
              <li>+84 24 3212 1810, +84 24 3212 1811</li>
              <li>hsv-sales@hino-systech.com</li>
              <li>Ô số 1 và ô số 2, tầng 13, 148 Tower, số 148 đường Hoàng Quốc Việt, Phường Nghĩa Tân, Quận Cầu Giấy, Thành phố Hà Nội, Việt Nam</li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Dịch vụ</h3>
            <ul className="space-y-3 text-white">
              <li>• Hệ thống SCADA</li>
              <li>• Điện mặt trời</li>
              <li>• Tự động hóa nhà máy</li>
              <li>• Tư vấn kỹ thuật</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
