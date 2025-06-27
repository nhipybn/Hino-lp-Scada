import { motion } from 'framer-motion';

const ServiceCTA = () => {
  return (
    <section className="py-16 bg-primary">
      <div className="container-custom">
        <div className="text-center text-white">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Bạn đang cần hệ thống quản lý năng lượng mặt trời?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg mb-8 max-w-2xl mx-auto"
          >
            Liên hệ với chúng tôi ngay hôm nay để chúng tôi có thể hỗ trợ bạn tối đa hoá nguồn năng lượng sạch một cách dễ dàng

          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4"
          >
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServiceCTA;