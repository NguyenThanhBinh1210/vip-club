import bannerPC from '~/assets/generic-masthead-desktop-1920x823.jpg'
import bannerMobile from '~/assets/generic-masthead-mobile-1080x1440.jpg'
const About = () => {
  return (
    <div>
      <div>
        <img
          src={bannerPC}
          alt='bannerPC'
          className='h-auto object-cover hidden md:block'
          style={{ aspectRatio: '21/9' }}
        />
        <img
          src={bannerMobile}
          alt='bannerMobile'
          className='h-auto object-cover block md:hidden'
          style={{ aspectRatio: '3/4' }}
        />
      </div>
      <div className='pt-20 pb-10'>
        <div className='max-w-[888px] mx-auto px-[33px] lg:px-0'>
          <h1 className='uppercase text-[40px] text-center mb-10'>Lời giới thiệu</h1>

          <p className='text-center text-[16px]  font-bold mb-10'>
            Giới thiệu về Let’s Win VIP Club
          </p>
          <p className=' text-[16px] mb-4'>
            Chào mừng bạn đến với Let’s Win VIP Club – điểm đến dành riêng cho những ai tìm kiếm trải nghiệm giải trí đỉnh cao và dịch vụ thượng lưu. Với không gian sang trọng, dịch vụ chuyên nghiệp và các trò chơi đẳng cấp, chúng tôi cam kết mang lại những khoảnh khắc khó quên cho từng vị khách.
          </p>

          <p className='text-left text-[16px] mb-4'>
            Tại Let’s Win VIP Club, bạn sẽ được tận hưởng:
          </p>
          <p className='text-left text-[16px] mb-4'>
            <strong>• Sảnh VIP tại Hồ Tràm Casino:</strong> Không gian riêng tư với các trò chơi dành riêng cho khách VIP, mang lại sự thoải mái và đẳng cấp.
          </p>
          <p className='text-left text-[16px] mb-4'>
            <strong>• Khu VIP tại Hoiana:</strong> Thiết kế tinh tế cùng dịch vụ cá nhân hóa, mang đến trải nghiệm độc đáo và sang trọng.
          </p>
          <p className='text-left text-[16px] mb-4'>
            <strong>• Club Poker tại khách sạn Danaciti:</strong> Điểm hẹn lý tưởng cho những người yêu thích Poker, với các giải đấu chuyên nghiệp và bàn chơi cao cấp.
          </p>

          <p className=' text-[16px] mb-4'>
            Đặc biệt, chúng tôi cung cấp dịch vụ chăm sóc khách hàng 24/7 qua hotline trực tiếp, sẵn sàng hỗ trợ và đáp ứng mọi nhu cầu của bạn.
          </p>

          <p className=' text-[16px] mb-4'>
            Hãy gia nhập cộng đồng thượng lưu tại Let’s Win VIP Club – nơi hội tụ của những trải nghiệm đỉnh cao và những khoảnh khắc chiến thắng!
          </p>

        </div>
      </div>
    </div>
  )
}

export default About