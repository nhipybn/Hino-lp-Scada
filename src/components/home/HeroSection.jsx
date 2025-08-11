import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section id="home" className="pt-32 pb-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
<h1 className="text-4xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-4">
              <span className="text-primary block mb-2">HỆ THỐNG SCADA</span>
              CÔNG NGHỆ NHẬT BẢN CHO ĐIỆN MẶT TRỜI
            </h1>
            <h2 className="text-xl md:text-2xl text-primary font-semibold mb-6">
              Quản lý dự án điện mặt trời hiệu quả hơn 300%
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Cung cấp phần mềm tích hợp toàn diện từ thiết kế, giám sát đến vận hành hệ thống năng lượng mặt trời công nghiệp.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white/50 backdrop-blur rounded-xl p-6 border border-primary/20">
                <div className="text-2xl font-bold text-primary mb-2">Tăng 120% <br /> hiệu suất</div>
                <p className="text-gray-600">Tối ưu hóa hiệu suất vận hành hệ thống</p>
              </div>
              <div className="bg-white/50 backdrop-blur rounded-xl p-6 border border-primary/20">
                <div className="text-2xl font-bold text-primary mb-2">Tiết kiệm đến 30% điện năng</div>
                <p className="text-gray-600">Quản lý năng lượng thông minh và hiệu quả</p>
              </div>
            </div>
            <div className="flex gap-4 flex-wrap">
            <a href="#contact" className="btn-primary">Trao đổi với chuyên gia</a>
             <a
    href="tel:0387419012" // thay số hotline của bạn
    className="flex items-center gap-2 bg-red-500 text-white px-5 py-2 rounded-lg shadow-lg hover:bg-red-600 transition duration-300"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-5 h-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 5a2 2 0 012-2h2.28a1 1 0 01.95.684l1.52 4.56a1 1 0 01-.27 1.06l-1.7 1.7a16.001 16.001 0 006.364 6.364l1.7-1.7a1 1 0 011.06-.27l4.56 1.52a1 1 0 01.684.95V19a2 2 0 01-2 2h-1c-9.941 0-18-8.059-18-18V5z"
      />
    </svg>
    Hotline liên hệ
  </a></div>
          </motion.div>
          
          <motion.div
    className="md:w-full h-full relative"
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.6, delay: 0.2 }}
  >
    <img
      src="https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
      alt="Solar Panels Installation"
      className="rounded-2xl shadow-2xl w-full h-full object-cover"
    />
    <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg">
      <div className="flex items-center gap-3">
        <div className="bg-green-100 p-3 rounded-full">
          <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <div>
          <div className="font-semibold">Eco-Friendly</div>
          <div className="text-sm text-gray-500">100% Clean Energy</div>
        </div>
      </div>
    </div>
  </motion.div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;