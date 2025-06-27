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
            <a href="#contact" className="btn-primary">Trao đổi với chuyên gia</a>
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