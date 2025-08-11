import { motion } from 'framer-motion';

const solutions = [
  {
    title: 'Giám sát hệ thống điện mặt trời áp mái',
    description: 'Phù hợp từ các nhà đầu tư lớn đến các nhà máy lắp điện mặt trời quy mô nhỏ.',
    image: 'https://images.unsplash.com/photo-1595437193398-f24279553f4f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Vận hành song song với máy phát',
    description: 'Kết hợp liền mạch hệ thống máy phát diesel nối lưới với bộ điều khiển năng lượng mặt trời.',
    image: '/img/mayphat.jpg'
  },
  {
    title: 'Điều khiển tập trung điện mặt trời',
    description: 'Theo dõi hiệu suất hệ thống 24/7 với độ chính xác 99.9% và cảnh báo tức thì',
    image: '/img/history_of_solar_cells.jpg'
  },
  {
    title: 'Đảm bảo hệ số công suất nhà máy',
    description: 'Theo dõi công suất điện nằm ở mức cho phép của EVN.',
    image: '/img/solarpanel.jpg'
  },
  {
    title: 'Tối ưu hóa hiệu suất của hệ thống điện mặt trời',
    description: 'Tối ưu hóa hiệu suất vận hành và quản lý năng lượng thông minh.',
    image: 'https://images.unsplash.com/photo-1548337138-e87d889cc369?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Đảm bảo ổn định điện áp và tần số lưới',
    description: 'Hạn chế rủi ro của việc tích hợp nguồn năng lượng tái tạo này vào lưới điện.',
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  }
];
 
const SolutionGrid = () => {
  return (
    <section id="giai phap" className=" py-16 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-primary">
            Giải pháp của chúng tôi
          </h2>
          <p className="text-lg text-gray-600 mx-auto"> Hiểu rõ nhu cầu của từng đối tượng khách hàng, chúng tôi tạo ra những tính năng phù hợp nhất</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-48">
                <img
                  src={solution.image}
                  alt={solution.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {solution.title}
                </h3>
                <p className="text-gray-600">
                  {solution.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionGrid;