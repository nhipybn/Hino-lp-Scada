import { motion } from 'framer-motion';

const Leadership = () => {
  const leaders = [
  {
  name: 'Masayasu Hino',
  position: 'Chủ tịch kiêm Giám đốc điều hành\nHino Systech Corporation',
  message: (
    <>
      <p className="text-gray-600 mb-4">
        Kể từ khi thành lập năm 1950, HINO SYSTECH CORPORATION đã đạt nhiều thành tựu trong tự động hóa quy trình (PA) và nhà máy (FA), đóng góp cho ngành công nghiệp Nhật Bản và quốc tế. Với hai phần ba nhân viên là kỹ sư điện và điều khiển, chúng tôi luôn theo đuổi công nghệ điều khiển tiên tiến và luôn luôn trau dồi, phát triển kỹ năng qua các dự án từ khách hàng.
      </p>
      <p className="text-gray-600">
        HINO SYSTECH CORPORATION cam kết cung cấp sản phẩm chất lượng cao, tạo ra giá trị mới cùng khách hàng, và tiên phong trong công nghệ điều khiển tương lai.
      </p>
    </>
  ),
  image: '/img/Mr.Hino.png'
}

,
   {
  name: 'Ông Mai Văn Tuyền',
  position: 'Giám đốc điều hành\nHino Systech Việt Nam',
  message: (
    <>
      <p className="mb-4">
        Hino Systech Việt Nam, thành lập năm 2015 tại Hà Nội, là chi nhánh Đông Nam Á của tập đoàn Hino Systech Nhật Bản. Chúng tôi cung cấp các giải pháp tự động hóa và phần mềm công nghiệp cho nhiều lĩnh vực như năng lượng mặt trời nhằm hỗ trợ quá trình chuyển đổi số trong sản xuất tại Việt Nam.
      </p>
      <p>
        Với tinh thần đổi mới và phát triển bền vững, chúng tôi tự hào giới thiệu Spiral-Solar – giải pháp “Make in Vietnam” do đội ngũ kỹ sư Hino Systech trực tiếp phát triển, giúp doanh nghiệp dễ dàng giám sát, quản lý và điều khiển hệ thống điện mặt trời một cách hiệu quả trên đa nền tảng.
      </p>
    </>
  ),
  image: '/img/a.Tuyen.jpg'
}

  ];

  return (
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-16 text-primary">Lời chào từ giám đốc</h2>
    
    <div className="grid md:grid-cols-2 gap-8">
      {leaders.map((leader, index) => (
        <motion.div
          key={leader.name}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="bg-white rounded-2xl shadow-lg p-8 flex gap-6"
        >
          <img
            src={leader.image}
            alt={leader.name}
            className="w-32 h-32 rounded-full object-cover shadow-lg"
          />
          <div>
            <h3 className="text-2xl text-left font-bold text-gray-900 mb-2">{leader.name}</h3>
            <p className="text-primary font-medium mb-4 whitespace-pre-line text-left">{leader.position}</p>
            <div className="text-left text-gray-600">{leader.message}</div>
          </div>
        </motion.div>
      ))}
    </div>
    </div>
  );
};

export default Leadership;