import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const ContactForm = () => {
  const formWrapperRef = useRef(null);

  useEffect(() => {
    if(typeof window === 'undefined' || !formWrapperRef.current) return;
    
    const script = document.createElement('script');
    script.id = '_bownow_cs_sid_fcffccc68aa102d77cc0';
    script.charset = 'utf-8';
    script.src = 'https://contents.bownow.jp/forms/sid_fcffccc68aa102d77cc0/trace.js';
    
    formWrapperRef.current.appendChild(script);
  }, []);

  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg min-h-[800px] max-h-[1300px] overflow-y-auto"
            >
              <h2 className="text-xl font-bold text-gray-900 mb-8 text-primary">Thông tin liên hệ</h2>
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-4">Hotline</h3>
                  <div className="space-y-2">
                    <p>+84 24 3212 1810</p>
                    <p>+84 24 3212 1811</p>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-4">Email</h3>
                  <p>hsv-sales@hino-systech.com</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-4">Địa chỉ</h3>
                  <p>Ô số 1 và ô số 2, tầng 13, 148 Tower</p>
                  <p>số 148 đường Hoàng Quốc Việt, Phường Nghĩa Tân,</p>
                  <p>Quận Cầu Giấy, Thành phố Hà Nội, Việt Nam</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-4">Giờ làm việc</h3>
                  <p>T2 - T6: 8:00 - 17:30</p>
                  <p>T7: 8:00 - 12:00</p>
                </div>
              </div>

              <div className="mt-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Tại sao chọn chúng tôi?</h3>
                <div className="grid gap-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900">12+ năm kinh nghiệm</h4>
                      <p className="text-gray-600">Chuyên gia hàng đầu về SCADA và điện mặt trời</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900">15+ dự án thành công</h4>
                      <p className="text-gray-600">Triển khai thành công trên toàn quốc</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900">Công nghệ Nhật Bản</h4>
                      <p className="text-gray-600">Áp dụng công nghệ tiên tiến từ Nhật Bản</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Contact Form: replace with BowNow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow-lg min-h-[800px] max-h-[1300px] overflow-y-auto"
          >
            <h2 className="text-xl font-bold text-gray-900 mb-8 text-primary">Điền thông tin bên dưới để nhận tư vấn</h2>
            <div className='wrapper-form' ref={formWrapperRef}/>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
