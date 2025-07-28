
import { motion } from 'framer-motion';

const CompanyValues = () => {
  const values = [
    {
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: 'Quản lý vận hành hệ thống điện mặt trời',
      description: 'Giải pháp tích hợp toàn diện, bảo mật cao và khả năng mở rộng cho doanh nghiệp (enterprise).',
      features: ['Báo cáo real-time và analytics', 'Quản lý đa dự án tập trung', 'Bảo mật cấp ngân hàng']
    },
    {
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'Tích hợp với hệ thống điện hiện tại',
      description: 'Tích hợp hệ thống điện mặt trời với các thành phần khác trong hệ thống điện',
      features: ['Quản lý đa dự án tập trung', 'Theo dõi tiến độ thời gian thực', 'Quản lý nguồn lực tối ưu']
    },
    {
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Quản lý chất lượng điện năng',
      description: 'Áp dụng thuật toán điều khiển để tối đa hệ thống điện mặt trời tới chất lượng điện năng của nhà máy.',
      features: ['Báo cáo tiến độ tự động', 'Cảnh báo rủi ro sớm', 'Quản lý thiết bị và vật tư']
    },
    {
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Kết nối và chia sẻ dữ liệu',
      description: 'Spiral Solar Scada có thể kết nối tới hệ thống EMS, SCADA hoặc MES có sẵn.',
      features: ['Giám sát chất lượng', 'Quản lý trên nền tảng số']
    },
    
    
  ];

  return (
    <section id="services" className="py-16 md:py-2 bg-white">

      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-primary">Giúp doanh nghiệp giải quyết những khó khăn trong việc </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="text-primary mb-6">{value.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
              <p className="text-gray-600 mb-6">{value.description}</p>
              <ul className="space-y-3">
                {value.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-600">
                    <svg className="w-5 h-5 text-primary mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
          
        </div>
        
      </div>
      
    </section>
  );
};

export default CompanyValues;