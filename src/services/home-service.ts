import { Injectable } from "@angular/core";
import { API } from "./api-service";
import { HTTP } from '@ionic-native/http'
@Injectable()
export class HomeService{
    constructor(public api:API,
        private http:HTTP){}
    urlAPI='http://192.168.1.221:8803/api/services/app/Information/GetListAsyncByTitle'
    getTitle = ():string => 'Tin tức nổi bật';  
    //getData() : lấy dữ liệu từ urlAPI
    getData(){
        console.log("start log Homeservice!");
        this.http.setDataSerializer('json');
        return this.http.get(this.urlAPI,{},{})
        
    }

    //getAllThemes là dữ liệu tĩnh (static) dùng để test khi không có API, hoặc không kết nối dc API
    getAllThemes = (): Array<any> => {
        return [
        {
         "tieuDe":"Ngôi nhà vẫn được làm hộ chiếu",
         "noiDung":"Từ tháng 8-2015, Phòng Quản lý xuất nhập cảnh (PA08, Công an TP.HCM) bắt đầu áp dụng khai hồ sơ trực tuyến (dịch vụ hành chính công mức độ ba). Đến nay việc này đã cho thấy nhiều lợi ích thực tế cho người dân và cả các cán bộ làm việc.",
         "tomTat":"(PL)- Nhờ dịch vụ hành chính công trực tuyến nên việc cấp đổi hộ chiếu hiện được thực hiện dễ dàng, người dân chỉ việc ở nhà hoàn tất các thủ tục bằng điện thoại hoặc máy tính…",
         "linkImage":"assets/images/avatar/news1.jpg",
         "ngayPhatHanh":"1/10/2019 12:00:00 AM",
         "ngayHetHan":"10/15/2019 9:08:11 AM",
         "enumTinhTrang":0,
         "loai":true,
         "donViID":0,
         "dateTime":"15/10/2019",
         "isDeleted":false,
         "deleterUserId":null,
         "deletionTime":null,
         "lastModificationTime":null,
         "lastModifierUserId":null,
         "creationTime":"2019-10-15T04:27:32.564",
         "creatorUserId":null,
         "id":1
        },
        {
        "tieuDe":"Ban quản lý an toàn thực phẩm rút ngắn 20% thời gian quản lý hồ sơ",
        "noiDung":'Nhằm đánh giá kết quả thực hiện công tác cải cách hành chính năm 2018 và triển khai quán triệt mục tiêu nhiệm vụ trọng tâm, đề ra giải pháp cho công tác cải cách hành chính năm 2019, tạo bước đột phá trong công tác cải cách hành chính năm 2019 của Ban Quản lý An toàn thực phẩm.\n\nNgày 19 tháng 02 năm 2019, Ban Quản lý An toàn thực phẩm đã tham dự Hội nghị trực tuyến tổng kết công tác cải cách hành chính năm 2018 và triển khai phương hướng, nhiệm vụ cải cách hành chính năm 2019 do Ủy ban nhân dân Thành phố tổ chức. Tại Hội nghị, nhằm triển khai thực hiện các mục tiêu, nhiệm vụ công tác cải cách hành chính của các cơ quan, đơn vị với chủ đề năm 2019 “Năm đột phá cải cách hành chính và đẩy mạnh thực hiện Nghị quyết số 54/2017/QH14” và nhằm đột phá để tăng tốc hoàn thành các nhiệm vụ về phát triển kinh tế - văn hóa - xã hội năm 2019, hướng tới Đại hội đại biểu Đảng bộ Thành phố lần XI, Chủ tịch UBND 24 quận, huyện, Thủ trưởng 29 sở, ban, ngành trong đó có Ban Quản lý An toàn thực phẩm đã thực hiện ký cam kết thực kiện ký cam kết với chủ đề: “Quyết tâm hoàn thành thắng lợi các mục tiêu, nhiệm vụ công tác cải cách hành chính của cơ quan năm 2019” gồm 10 nội dung cụ thể như sau:\n\n1. Tập trung xây dựng cải cách tổ chức bộ máy tinh gọn, hoạt động hiệu lực, hiệu quả theo tinh thần của Nghị quyết số 18 và 19-NQ/TW của Hội nghị lần thứ sáu Ban Chấp hành Trung ương Khóa XII và Nghị quyết, Kế hoạch của thành phố. 100% cơ quan, đơn vị trực thuộc phải có Quy chế tổ chức và hoạt động, Quy chế làm việc phù hợp quy định hiện hành. Đào tạo đội ngũ cán bộ, công chức, viên chức có số lượng, cơ cấu hợp lý, đủ phẩm chất và năng lực thi hành công vụ.\n\n2. Thủ trưởng cơ quan, đơn vị trực tiếp lãnh đạo, chỉ đạo, có cơ chế kiểm soát công tác tiếp nhận, giải quyết, trả hồ sơ thủ tục hành chính của cá nhân, doanh nghiệp. Đối với quy trình liên thông, người đứng đầu cơ quan đầu mối tiếp nhận hồ sơ chịu trách nhiệm kiểm soát, theo dõi, đôn đốc toàn bộ quy trình:\n\n - Công khai kịp thời, đầy đủ, đúng quy định các danh mục thủ tục hành chính, các thủ tục hành chính được công bố; các danh mục thủ tục hành chính áp dụng dịch vụ công trực tuyến mức độ 3, 4; các danh mục không áp dụng tiếp nhận và trả kết quả qua dịch vụ bưu chính công ích tại Bộ phận tiếp nhận và trả kết quả và Trang thông tin điện tử (nếu có) của cơ quan, đơn vị trực thuộc.',
        "tomTat":"(PL)- Nhờ dịch vụ hành chính công trực tuyến nên việc cấp đổi hộ chiếu hiện được thực hiện dễ dàng, người dân chỉ việc ở nhà hoàn tất các thủ tục bằng điện thoại hoặc máy tính…",
        "linkImage":"assets/images/avatar/news2.jpg",
        "ngayPhatHanh":"10/15/2019 9:08:25 AM",
        "ngayHetHan":"10/15/2019 9:08:25 AM",
        "enumTinhTrang":0,
        "loai":false,
        "donViID":0,
        "dateTime":"15/11/2019",
        "isDeleted":false
        ,"deleterUserId":null,
        "deletionTime":null,
        "lastModificationTime":null,
        "lastModifierUserId":null,
        "creationTime":"2019-11-15T09:08:25.7466667",
        "creatorUserId":null,
        "id":2
        },
        {
        "tieuDe":"Khó sa thải cán bộ yếu chuyên môn",
        "noiDung":"Ông Nguyễn Lê Nhân, Phó Trưởng phòng Nội vụ huyện Hóc Môn, thừa nhận nhiều xã trên địa bàn huyện khó tìm ra công chức không hoàn thành nhiệm vụ để đưa vào diện tinh giản biên chế. “Các tiêu chí đánh giá cán bộ hiện nay hầu hết đều mang tính chất định tính, ước lượng, chưa rõ người, rõ việc, nhiều công việc làm chung, thậm chí chồng chéo giữa các cán bộ và giữa các đơn vị.\nDẫn đến chuyện khi có thành tích thì thành tích chung, ai cũng nhận đưa vào báo cáo của mình để được hưởng lợi, nhưng khi xảy ra sai sót phải kiểm điểm và kỷ luật thì không ai nhận, khi rà trách nhiệm thì không biết quy cho ai”, ông Nhân phân tích.\nCũng theo ông Nhân, việc đánh giá cán bộ hàng năm được tiến hành tại các cơ quan, đơn vị hiện nay chủ yếu dựa trên việc bình bầu của các thành viên trong đơn vị.\n\n \n\nCán bộ công chức phường 4, quận Tân Bình tiếp và nhận, trả hồ sơ cho người dân\nCó đơn vị xây dựng thang điểm đánh giá nhưng khó cho ra kết quả rõ ràng, còn tồn tại việc đánh giá theo kiểu “yêu - ghét” ai đó, có ảnh hưởng không nhỏ trong kết quả bình bầu thi đua. Như vậy, kết quả chủ yếu dựa vào cảm tính chứ chưa phải là kết quả của công việc, ảnh hưởng lớn đến kết quả tinh giản biên chế tại các cơ quan, đơn vị.\nỞ UBND quận Thủ Đức, đến thời điểm hiện tại cũng chưa tinh giản được trường hợp nào 2 năm không hoàn thành nhiệm vụ. Cũng như các địa phương khác, Chủ tịch UBND quận Thủ Đức Đặng Nguyễn Thanh Minh cho rằng nguyên nhân là do tâm lý ngại va chạm, nể nang, muốn giữ ổn định tổ chức, e ngại ảnh hưởng thành tích tập thể, không muốn mất biên chế ở đơn vị mình.\nĐồng tình với các nhận định trên, ông Huỳnh Việt Hùng, Trưởng phòng Nội vụ quận 8, nhìn nhận công tác đánh giá cán bộ công chức hiện nay vẫn gắn với cơ chế tín nhiệm, nên có hiện tượng cấp trên sợ cấp dưới, thủ trưởng sợ nhân viên không bỏ phiếu tín nhiệm cho mình.\nChưa kể đến mối quan hệ riêng nên trong công việc dễ “dĩ hòa vi quý”, thủ trưởng không dám nói nhân viên, mặc dù biết họ không làm được việc. Vì vậy, theo ông Hùng, cần xây dựng hệ tiêu chí, tiêu chuẩn cụ thể với từng cấp, từng vị trí làm việc, có thang đánh giá minh bạch, áp dụng công khai, công bằng với mọi thành viên.\nNhiều lúng túng\nĐại diện UBND phường Phạm Ngũ Lão (quận 1) cho biết, năm 2016 phường có một cán bộ ở bộ phận Tư pháp - Hộ tịch không hoàn thành nhiệm vụ, năm 2017 thì cán bộ này được nhận xét hoàn thành nhiệm vụ nên không đưa ra khỏi bộ máy được.\n“Cái khó trong công tác tinh giản biên chế theo hướng sa thải cán bộ yếu về chuyên môn là 2 năm không hoàn thành nhiệm vụ. Nếu yêu cầu đưa ra là năm sau phải hoàn thành xuất sắc nhiệm vụ hoặc có thành tích gì đó bù lại thì sẽ thuyết phục hơn, thay vì chỉ cần đạt hoàn thành nhiệm vụ như hiện nay”, đại diện UBND phường Phạm Ngũ Lão nêu ý kiến.\nTrong khi đó, Bí thư phường Tăng Nhơn Phú B (quận 9) Hoàng Thị Minh Ngọc cho rằng việc đánh giá cán bộ không hoàn thành nhiệm vụ cũng rất chung chung. Đơn cử năm 2018 có một trường hợp của phường bị kiểm điểm do vi phạm luật giao thông, nên kết quả đánh giá cuối năm là không hoàn thành nhiệm vụ. Song, về bản chất, vi phạm của họ không liên quan đến chuyên môn, nghiệp vụ. “Nếu áp dụng như vậy thì sẽ thiệt thòi cho cán bộ, công chức, viên chức”, bà Ngọc nhận định.\nMột bất cập mà Trưởng phòng Nội vụ quận 8 chỉ ra là việc tinh giản biên chế phải gắn với đánh giá cán bộ và sắp xếp tổ chức bộ máy; nhưng theo quy định thì mỗi cơ quan, đơn vị phải xây dựng kế hoạch tinh giản biên chế cho cả giai đoạn 2015-2020, còn nhận xét, đánh giá cán bộ, công chức lại tính theo từng năm. Như vậy các cơ quan, đơn vị sẽ không thể dự kiến được số lượng tinh giản là bao nhiêu để đưa vào kế hoạch thực hiện.\nĐối với quận Thủ Đức, Chủ tịch UBND quận Đặng Nguyễn Thanh Minh cho rằng các đơn vị sẽ lúng túng trong việc giải quyết các khiếu nại nếu cán bộ, công chức, viên chức khiếu nại khi bị phân loại đánh giá hoàn thành nhiệm vụ nhưng hạn chế về năng lực hoặc không hoàn thành nhiệm vụ. Cũng theo ông Minh, thực tế khối lượng, chất lượng làm việc của cán bộ, công chức, viên chức khu vực nhà nước là khó định lượng.\nTrong khi đó, các đề án vị trí việc làm hiện nay tại các cơ quan, đơn vị còn khá chung chung. Từ đó ông Minh đề xuất bảng mô tả công việc cũng như khung năng lực được xây dựng dựa trên thực tế biên chế, người làm việc hiện tại ở cơ quan, đơn vị cần có sự tham khảo ý kiến từ các cơ quan, đơn vị có chức năng, nhiệm vụ tương tự ở quận huyện, tỉnh thành; ý kiến của các chuyên gia cũng như kinh nghiệm từ các tổ chức (thậm chí là từ các doanh nghiệp) đã thực hiện tốt việc xây dựng các bảng mô tả công việc và chỉ số đánh giá hiệu quả công việc.\n",
        "tomTat":"Theo quy định, cán bộ, công chức, viên chức 2 năm không hoàn thành nhiệm vụ sẽ bị đưa ra khỏi bộ máy. Song, chính công tác đánh giá cán bộ hiện nay chưa sát thực tế dẫn đến mục tiêu này không dễ thực hiện.\nCòn “dĩ hòa vi quý”\n",
        "linkImage":"assets/images/avatar/news3.jpg","ngayPhatHanh":"10/15/2019 9:08:25 AM","ngayHetHan":"10/15/2019 9:08:25 AM",
        "enumTinhTrang":0,
        "loai":false,
        "donViID":0,
        "dateTime":"15/11/2019",
        "isDeleted":false,
        "deleterUserId":null,
        "deletionTime":null,
        "lastModificationTime":null,
        "lastModifierUserId":null,
        "creationTime":"2019-11-15T09:08:25.7566667",
        "creatorUserId":null,
        "id":3
        },
        {
        "tieuDe":"Quận 1: Thí điểm tiếp nhận đăng ký giải quyết thủ tục hành chính không giấy lĩnh vực lao động",
        "noiDung":"Tại Quận 1, dịch vụ công trực tuyến lĩnh vực lao động là dịch vụ thu hút số lượng doanh nghiệp quan tâm sử dụng dịch vụ công trực tuyến cao nhất. Từ năm 2018 đến tháng 9/2019, Quận 1 có hơn 3.500 doanh nghiệp sử dụng dịch vụ công trực tuyến để thực hiện thủ tục khai trình sử dụng lao động.\nTại lễ ra mắt thí điểm tiếp nhận đăng ký giải quyết thủ tục hành chính không giấy lĩnh vực lao động, UBND Quận 1 giới thiệu, hướng dẫn doanh nghiệp sử dụng máy tính, máy tính bảng, điện thoại để nộp hồ sơ trực tuyến và nhận kết quả là “văn bản điện tử cùng chữ ký số” đối với tất cả các thủ tục thuộc lĩnh vực lao động gồm: khai trình sử dụng lao động khi mới thành lập; khai trình sử dụng lao động 6 tháng; đăng ký nội quy lao động; thỏa ước lao động tập thể; hệ thống thang bảng lương.\nTrước đó, ngày 2/7/2019, UBND Quận 1 đã ra mắt thí điểm tiếp nhận thủ tục hành chính không giấy lĩnh vực kinh tế. Đến nay, 100% thủ tục hành chính được giải quyết trên môi trường mạng.\nPhát biểu tại lễ ra mắt thí điểm, Phó Giám đốc Sở Nội vụ TPHCM Huỳnh Công Hùng ghi nhận những nỗ lực và đề nghị UBND Quận 1 tiếp tục suy nghĩ, sáng tạo những cách làm tiện ích, hướng dẫn, phục vụ tốt nhất cho doanh nghiệp, người dân trên Trang Thông tin của Quận 1 và cập nhật thông tin của ngành lao động đến các doanh nghiệp; đảm bảo đường truyền tốt, bảo mật; xây dựng phần mềm quản lý lao động trên địa bàn quận tương thích với phần mềm quản lý chung của quận; ghi nhận góp ý của doanh nghiệp để tiếp tục cải tiến ngày càng tiện ích, thân thiện, hiệu quả.\nChủ tịch UBND Quận 1 Nguyễn Văn Dũng cho biết: UBND quận với nhận thức tạo mọi điều kiện thuận lợi để doanh nghiệp ít phải đến cơ quan hành chính, dành nhiều thời gian phát triển doanh nghiệp, chăm lo tốt hơn cho quyền lợi của người lao động, từ đó góp phần tăng nguồn thu ngân sách quận. UBND quận phấn đấu đến nửa cuối tháng 11/2019 tiếp tục giới thiệu thí điểm tiếp nhận thủ tục hành chính không giấy lĩnh vực quản lý đô thị để phục vụ người dân và cộng đồng doanh nghiệp tốt hơn.\n",
        "tomTat":"(Thanhuytphcm.vn) - Sáng 2/10, UBND Quận 1 tổ chức lễ ra mắt thí điểm tiếp nhận đăng ký giải quyết thủ tục hành chính không giấy lĩnh vực lao động. Đến dự có đồng chí Huỳnh Công Hùng, Phó Giám đốc Sở Nội vụ TPHCM.","linkImage":"assets/images/avatar/news4.jpg","ngayPhatHanh":"2/10/2019 12:00:00 AM",
        "ngayHetHan":"2/10/2019 12:00:00 AM",
        "enumTinhTrang":0,
        "loai":true,"donViID":0,
        "dateTime":"15/10/2019",
        "isDeleted":false,
        "deleterUserId":null,
        "deletionTime":null,
        "lastModificationTime":null,
        "lastModifierUserId":null,
        "creationTime":"2019-10-15T10:13:21.4856134",
        "creatorUserId":null,
        "id":4
        },
        {
            "tieuDe":"Lợi ích từ bản đồ số dùng chung",
            "noiDung":"Nền tảng tích hợp, chia sẻ dữ liệu Theo Sở TT-TT TPHCM, ứng dụng hệ thống công nghệ thông tin địa lý (GIS) trong các hệ thống thông tin tại quận huyện, sở ngành còn rất hạn chế, chỉ mới tập trung trong công tác quản lý nhà đất và quy hoạch đô thị. Điều này do thành phố chưa triển khai dịch vụ bản đồ số dùng chung (do chờ tiến độ hoàn thành và chia sẻ dữ liệu bản đồ).Song song đó, các ứng dụng khai thác dịch vụ bản đồ chủ yếu sử dụng trên dịch vụ bản đồ nền GoogleMaps (cổng thông tin quy hoạch...) hoặc dịch vụ bản đồ nền (cổng 1022, cổng thông tin giao thông...), thiếu quy định thống nhất chung trong sử dụng dịch vụ và thiếu cơ chế tích hợp chia sẻ dữ liệu bản đồ, đặc biệt là các lớp dữ liệu dùng chung thuộc bản đồ nền để khai thác dùng chung...Trong khi đó, bản đồ số dùng chung là nội dung quan trọng để xây dựng kho dữ liệu dùng chung và phát triển hệ sinh thái dữ liệu mở trong Đề án “Xây dựng TPHCM trở thành đô thị thông minh”.Chính vì vậy, Sở TT-TT TPHCM đã triển khai thí điểm bản đồ số dùng chung, hướng tới hình thành kho dữ liệu dùng chung, tích hợp các tập dữ liệu (datasets) trên cơ sở bắt đầu từ 3 nhóm dữ liệu gốc (master data) về người dân, doanh nghiệp, bản đồ số; cơ sở dữ liệu mã (CSDL) và danh mục (CSDL tham chiếu - reference data).Ngoài ra, các thực thể dữ liệu còn có trục tham chiếu quan trọng là thời gian và không gian. CSDL về thông tin người dân (sinh ra, lớn lên, công việc...); dữ liệu tài sản, nhà đất; dữ liệu giao thông; dữ liệu về giấy chứng nhận, giấy phép; dữ liệu về các sự kiện, vấn đề xảy ra đối với thành phố... đều cần xác định thời gian và địa điểm.            Bản đồ số dùng chung sẽ xác định rõ thời gian, địa điểm khi tra cứu thông tin. Ảnh: T.BAVì vậy, dịch vụ bản đồ số là một ứng dụng - dịch vụ quan trọng cần thiết thuộc nền tảng HCM LGSP (LGSP là nền tảng tích hợp, chia sẻ dữ liệu cấp tỉnh/thành, chứa các dịch vụ dùng chung để chia sẻ dữ liệu) cho các phần mềm ứng dụng để phục vụ tham chiếu và lưu trữ thông tin địa chỉ với một mã vị trí địa lý thống nhất chung (Geocode) một cách chính xác, trực quan… Từ đó hình thành các lớp dữ liệu có thể liên kết, chồng các lớp dữ liệu, chia sẻ dữ liệu thống nhất trên nền hệ thống thông tin địa lý thống nhất.Người dân, doanh nghiệp hưởng lợiBà Võ Thị Trung Trinh, Phó giám đốc Sở TT-TT TPHCM, cho biết từ nay đến tháng 6-2020, thành phố sẽ thí điểm tích hợp một số dữ liệu, thông tin đã được các sở ngành, địa phương phê duyệt vào một bản đồ số dùng chung. Thông qua bản đồ số dùng chung này, người dân, doanh nghiệp sẽ dễ dàng tra cứu các thông tin chi tiết của tất cả các lĩnh vực trong đời sống xã hội…Đơn cử, ở lĩnh vực y tế, doanh nghiệp có thể thông qua bản đồ số để biết được TPHCM có bao nhiêu cơ sở khám chữa bệnh. Từ đó, nếu muốn đầu tư xây dựng một cơ sở khám chữa bệnh mới thì nên đặt ở đâu.Người dân cũng dễ dàng tra cứu địa chỉ khám chữa bệnh tin cậy, tốt nhất cho nhu cầu của mình. Hay ở mảng giáo dục, phụ huynh và học sinh sẽ nắm được danh sách các cơ sở giáo dục nhà nước và tư nhân tại TPHCM, chất lượng và quy mô ra sao, để so sánh, chọn lựa, đầu tư…Mục đích chung của TPHCM trong giai đoạn từ nay đến năm 2020 và tầm nhìn 2025, đặc biệt đến cuối năm 2020 là phải vận hành được một số cơ sở dữ liệu dùng chung. Do vậy, UBND TPHCM đã ban hành kế hoạch xây dựng kho dữ liệu dùng chung trên 3 nền tảng là người dân, doanh nghiệp và bản đồ.Đến nay, TPHCM đã triển khai thực hiện nội dung liên quan đến người dân là dân cư và hộ tịch, dự kiến tháng 6-2020 sẽ hoàn thành xây dựng cơ sở dữ liệu về người dân. Tuy nhiên, vẫn còn “thiếu” bản đồ số dùng chung.“Việc xây dựng bản đồ số dùng chung hết sức quan trọng, nhất là hiện nay bản đồ số của TPHCM nằm trong tình trạng mỗi đơn vị, cơ quan có dữ liệu thông tin riêng lẻ. Điều này dẫn đến không có sự thống nhất, không đáp ứng được tính cập nhật thường xuyên và phản ánh đúng hiện trạng. Trong khi đó, việc xây dựng cơ sở dữ liệu dùng chung là nhiệm vụ trọng tâm, phản ảnh đúng hiện trạng của TPHCM”, bà Võ Thị Trung Trinh nhấn mạnh.",
            "tomTat":"UBND TPHCM đã ban hành kế hoạch xây dựng kho dữ liệu dùng chung trên 3 nền tảng là người dân, doanh nghiệp và bản đồ. Đến thời điểm này, còn một cơ sở dữ liệu rất quan trọng mà TP đang gấp rút làm, đó là kho dữ liệu dùng chung liên quan đến bản đồ số",
            "linkImage":"assets/images/avatar/news5.jpg",
            "ngayPhatHanh":"SGGP16/09/19 08:50 GMT+",
            "ngayHetHan":"10/15/2019 9:08:11 AM",
            "enumTinhTrang":0,
            "loai":true,
            "donViID":0,
            "dateTime":"15/10/2019",
            "isDeleted":false,
            "deleterUserId":null,
            "deletionTime":null,
            "lastModificationTime":null,
            "lastModifierUserId":null,
            "creationTime":"2019-10-15T04:27:32.564",
            "creatorUserId":null,
            "id":5
        },
        {
            "tieuDe":"Thông tin này sẽ được xử lý trong vòng 4 giờ",
            "noiDung":"Khi hiệu quả làm việc của cán bộ gắn liền với chỉ số hài lòng của người dân, câu chuyện người được phục vụ bị nhũng nhiễu, hạch sách sẽ lùi vào quá vãng.“Người dân có khó chịu không?”Sáng cuối tuần, ông Nguyễn Đình Nghĩa (xã Trung Chánh) đến UBND huyện Hóc Môn, TP.HCM lấy kết quả cho yêu cầu xin chấm dứt kinh doanh.            Nhận kết quả từ cán bộ Nguyễn Thị Hồng Tươi, ông vui vẻ nhìn vào màn hình chiếc iPad bên cạnh đang thể hiện các hạng mục: thái độ phục vụ của công chức: tốt - bình thường - kém; giải thích, hướng dẫn của công chức: dễ hiểu - bình thường - khó hiểu; chất lượng phục vụ: tốt - bình thường - kém. Ông Nghĩa nhấn tay, lần lượt chọn trên màn hình: tốt - tốt - tốt.             Đáp lại nỗ lực cải cách hành chính của UBND H.Hóc Môn, 100% người dân tự nguyện thực hiện đánh giá sự hài lòngLý giải cho những lượt nhấn tốt của mình, ông Nghĩa cho hay, do đăng ký ngưng hoạt động kinh doanh, ông chẳng buồn đi nhận kết quả. Chỉ đến gần ngày phải hoàn thành nghĩa vụ thuế, vợ ông phát hoảng, giục chồng đi lấy kết quả để hoàn tất các thủ tục còn lại.             Trễ gần nửa tháng, ông Nghĩa cứ ngỡ cán bộ UBND huyện sẽ làm khó mình hoặc ít nhất cũng là vài câu lằng nhằng, khó nghe.\n “Thế mà, trong lúc tôi còn ái ngại đưa giấy hẹn thì cô Tươi rất niềm nở, giải quyết cho tôi chỉ trong vòng 30 giây. Cô ấy còn chỉ tôi các bước phải hoàn tất trong quy trình ngừng kinh doanh. Cán bộ như thế, tôi không “đánh” tốt sao được” - ông Nghĩa nói.Ở UBND huyện Hóc Môn, tại bộ phận tiếp nhận hồ sơ và giải quyết thủ tục hành chính, trước bàn làm việc của mỗi cán bộ đều trang bị một iPad để tiếp nhận đánh giá của người dân. Gần 2 tháng trước, trong một cuộc họp về cải cách hành chính ở TP.HCM, ông Nguyễn Thiện Nhân - Bí thư Thành ủy TP.HCM - nhận xét, dù chậm hơn vài quận, huyện, việc ứng dụng công nghệ thông tin của UBND huyện Hóc Môn là một điển hình cho hiệu quả kết nối giữa người dân và chính quyền, với tỷ lệ 100% người dân có công việc tương tác với chính quyền đều để lại đánh giá.             “Tỷ lệ tuyệt đối, nhưng trước yêu cầu buộc phải đánh giá của chính quyền, liệu người dân có thấy khó chịu không?” - ông Nhân đặt vấn đề.Với mỗi phản ánh của người dân, cơ quan chức năng sẽ kiểm tra, xử lý trong 4 giờChị Nguyễn Hồ K. - một người dân ở xã Tân Hiệp - khẳng định: “Nếu không tự nguyện, tôi cũng không cảm thấy khó chịu khi cán bộ đề nghị đánh giá. Không phải là chuyện chỉ mất 3 giây cho thao tác này mà tôi nghĩ, đó cũng là trách nhiệm của người dân đối với chính quyền. Mình thấy cán bộ đối đãi, làm việc ra sao thì cứ thế nhận xét, đánh giá thôi”. Theo chị K., thỉnh thoảng, báo chí vẫn điểm mặt, gọi tên những cán bộ lợi dụng chức vụ, nên chuyện người dân bị nhũng nhiễu, đòi hỏi vẫn là nỗi sợ mỗi khi có chuyện cần tương tác với chốn công quyền. \nBản thân chị từng chứng kiến một người bạn đến cơ quan thuế ở quận X. để hoàn thành nghĩa vụ sau khi bán được căn nhà. Theo đó, dù chỉ có một căn nhà vừa bán, thuộc trường hợp miễn đóng thuế thu nhập cá nhân, nhưng tại cơ quan chức năng, cán bộ thuế vẫn “nghi ngờ”, tra vấn bạn của chị: “Tôi tra trên mạng thấy chị có đến 3 căn nhà ở quận A, quận B”. Vị cán bộ yêu cầu, để được miễn thuế, bạn của chị K. phải đi xác thực 2 căn nhà kia không do mình sở hữu.            Không thể chứng minh bằng miệng, bạn của chị K. đành thất thểu ra về. Thế nhưng, vừa ra đến cửa thì cán bộ gọi giật. Giữa mớ giấy tờ ngổn ngang trên bàn, vị cán bộ viết lên một tờ giấy loại, chìa cho bạn của chị K.: “Chị có cần nhờ dịch vụ xác minh thì đây, xong trong 1 ngày, 3 triệu đồng”. Chị K. kết luận: “Đời ai cũng có nhiều việc phải gắn với chính quyền nên tôi cho rằng, đánh giá cán bộ phải là một thói quen văn minh của người dân, của thủ tục hành chính minh bạch”. Vì thế, khi đến UBND huyện Hóc Môn để lấy biên nhận xin thành lập hộ kinh doanh cá thể, dù đang rất vội, chị K. vẫn nán lại để đánh giá sự phục vụ của cán bộ.Sau khi nhận kết quả, ông Nguyễn Đình Nghĩa không chút đắn đo thực hiện những “cú đánh”Theo ông Dương Hồng Thắng - Chủ tịch UBND huyện Hóc Môn - kể từ ngày triển khai, thống kê qua phần mềm đánh giá thái độ làm việc, phục vụ của cán bộ cho kết quả gần 99% người dân bày tỏ mức độ hài lòng. Tới đây, bộ phận tiếp nhận hồ sơ của huyện cũng sẽ trang bị máy chụp hình, máy scan để phục vụ người dân tốt hơn.Mỗi người dân, một “cán bộ” đô thịNgoài trang bị iPad ngay tại đơn vị, từ tháng 4/2019, UBND H.Hóc Môn còn triển khai ứng dụng (app) “Hóc Môn trực tuyến” để kết nối người dân.Chỉ cần tải phần mềm “Hóc Môn trực tuyến”, thay vì phải đến UBND, người dân có thể ngồi tại nhà thực hiện các tương tác dịch vụ công với chính quyền huyện; như nộp hồ sơ, tra cứu thông tin quy hoạch…             Kể từ quý III/2019, UBND TP.HCM áp dụng chi trả thu nhập tăng thêm cho cán bộ, công chức, viên chức dựa trên sự hài lòng của người dân.            Phần mềm “Hóc Môn trực tuyến” cho phép lãnh đạo huyện nắm được cụ thể chất lượng làm việc, tỷ lệ hài lòng của người dân đối với từng nhân viên; qua đó dễ dàng đánh giá chỉ tiêu, chất lượng hoàn thành nhiệm vụ của từng cán bộ, công chức, viên chức.Cũng qua phần mềm này, người dân dễ dàng theo dõi, tra cứu tình trạng, tiến độ giải quyết hồ sơ của mình. Hướng đến chất lượng phục vụ của cán bộ nên phần mềm còn cho phép người dân được nhận xét, đánh giá từng khâu giải quyết hồ sơ. Nhờ đó, ngoài việc tiết kiệm thời gian, chi phí… người dân còn “đôn đốc” được cán bộ thông qua việc phản ánh chất lượng phục vụ.Ông Dương Hồng Thắng cho biết, ngoài phát huy tính dân chủ của người dân, “Hóc Môn trực tuyến” còn giúp tăng khả năng làm việc của cán bộ, điều chỉnh thái độ, loại bỏ sự nhũng nhiễu, tiêu cực. Do mỗi hạng mục nộp hồ sơ đều bao gồm các yêu cầu nộp đủ, nộp đúng, nên cán bộ tiết kiệm được thời gian kiểm tra từng loại, qua đó xử lý được nhiều hồ sơ hơn trước. Không dừng lại ở đó, “Hóc Môn trực tuyến” còn giúp chính quyền kịp thời gửi đến dân các khuyến cáo về tình hình trật tự hoặc các thông báo về chính sách, chủ trương của huyện; giúp lãnh đạo huyện điều hành, giám sát cán bộ, thông qua theo dõi tình hình xử lý hồ sơ, tiến độ giải quyết đơn thư, khiếu nại, tố cáo…Không chỉ chuyện giải quyết hồ sơ, “Hóc Môn trực tuyến” còn giúp kết nối người dân - chính quyền. Ba tháng nay, anh Quốc Hùng (xã Đông Thạnh) được bạn bè gán cho biệt danh “công dân gương mẫu”. Anh Hùng bẽn lẽn: “Tại tính tôi nhiều chuyện”.Với phần mềm “Hóc Môn trực tuyến” cài trên điện thoại, anh Hùng kể, trong phạm vi của huyện, đi đến đâu, nhìn thấy điều gì chướng mắt, anh đều mở điện thoại, phản ánh với chính quyền. Có hôm đi ngang một con kênh, thấy cống bị nghẹt, anh liền mở app, viết: “Kênh Bà Mẫn bị ứ rác, nghẹt cống, ngăn dòng chảy” rồi gửi đi, kèm tấm hình anh vừa chụp. Cũng ngay lập tức, anh nhận được tin nhắn hồi đáp: “Thông tin đã được gửi tới cơ quan chức năng thành công, sẽ được xử lý trong vòng 4 giờ”.\n Hôm khác, nhìn thấy một nắp cống bị lệch, anh Hùng cũng dừng xe, vào app gửi thông tin…“Tôi cảm thấy không thoải mái với những cái chướng mắt như vậy, nhưng ngày xưa không biết phải phản ánh với ai. Có mấy đường dây nóng cho các lĩnh vực thì cũng không làm sao nhớ nổi. Bây giờ, từ chuyện nhà hàng xóm có bạo hành, ngoài đường có ổ voi hay nhà kia tổ chức đánh bạc… tôi chỉ việc mở “Hóc Môn trực tuyến”, báo cho chính quyền” - anh Hùng nói.Tiếp nhận thông tin người dân, trong vòng 4 giờ, UBND huyện Hóc Môn nhanh chóng phân công cho cán bộ, đơn vị liên quan trực tiếp xử lý. Chủ tịch UBND huyện Hóc Môn cho hay, nếu sau 4 giờ kể từ lúc tiếp nhận phản ánh của người dân, cán bộ hữu trách không giải quyết, xem như chậm trễ, người đứng đầu đơn vị cũng phải chịu trách nhiệm. ",
            "tomTat":"Nếu sau 4 giờ kể từ lúc tiếp nhận phản ánh của người dân, cán bộ hữu trách không giải quyết thì xem như chậm trễ, người đứng đầu đơn vị cũng phải chịu trách nhiệm.",
            "linkImage":"assets/images/avatar/news6.jpg",
            "ngayPhatHanh":"SGGP16/09/19 08:50 GMT+",
            "ngayHetHan":"10/15/2019 9:08:11 AM",
            "enumTinhTrang":0,
            "loai":true,
            "donViID":0,
            "dateTime":"15/10/2019",
            "isDeleted":false,
            "deleterUserId":null,
            "deletionTime":null,
            "lastModificationTime":null,
            "lastModifierUserId":null,
            "creationTime":"2019-10-15T04:27:32.564",
            "creatorUserId":null,
            "id":6
        },
        {
            "tieuDe":"Tinh giản biên chế từ nguồn… nghỉ hưu",
            "noiDung":"Khi hiệu quả làm việc của cán bộ gắn liền với chỉ số hài lòng của người dân, câu chuyện người được phục vụ bị nhũng nhiễu, hạch sách sẽ lùi vào quá vãng.“Người dân có khó chịu không?”Sáng cuối tuần, ông Nguyễn Đình Nghĩa (xã Trung Chánh) đến UBND huyện Hóc Môn, TP.HCM lấy kết quả cho yêu cầu xin chấm dứt kinh doanh.            Nhận kết quả từ cán bộ Nguyễn Thị Hồng Tươi, ông vui vẻ nhìn vào màn hình chiếc iPad bên cạnh đang thể hiện các hạng mục: thái độ phục vụ của công chức: tốt - bình thường - kém; giải thích, hướng dẫn của công chức: dễ hiểu - bình thường - khó hiểu; chất lượng phục vụ: tốt - bình thường - kém. Ông Nghĩa nhấn tay, lần lượt chọn trên màn hình: tốt - tốt - tốt.             Đáp lại nỗ lực cải cách hành chính của UBND H.Hóc Môn, 100% người dân tự nguyện thực hiện đánh giá sự hài lòngLý giải cho những lượt nhấn tốt của mình, ông Nghĩa cho hay, do đăng ký ngưng hoạt động kinh doanh, ông chẳng buồn đi nhận kết quả. Chỉ đến gần ngày phải hoàn thành nghĩa vụ thuế, vợ ông phát hoảng, giục chồng đi lấy kết quả để hoàn tất các thủ tục còn lại.             Trễ gần nửa tháng, ông Nghĩa cứ ngỡ cán bộ UBND huyện sẽ làm khó mình hoặc ít nhất cũng là vài câu lằng nhằng, khó nghe. “Thế mà, trong lúc tôi còn ái ngại đưa giấy hẹn thì cô Tươi rất niềm nở, giải quyết cho tôi chỉ trong vòng 30 giây. Cô ấy còn chỉ tôi các bước phải hoàn tất trong quy trình ngừng kinh doanh. Cán bộ như thế, tôi không “đánh” tốt sao được” - ông Nghĩa nói.Ở UBND huyện Hóc Môn, tại bộ phận tiếp nhận hồ sơ và giải quyết thủ tục hành chính, trước bàn làm việc của mỗi cán bộ đều trang bị một iPad để tiếp nhận đánh giá của người dân. Gần 2 tháng trước, trong một cuộc họp về cải cách hành chính ở TP.HCM, ông Nguyễn Thiện Nhân - Bí thư Thành ủy TP.HCM - nhận xét, dù chậm hơn vài quận, huyện, việc ứng dụng công nghệ thông tin của UBND huyện Hóc Môn là một điển hình cho hiệu quả kết nối giữa người dân và chính quyền, với tỷ lệ 100% người dân có công việc tương tác với chính quyền đều để lại đánh giá.  \n\n           “Tỷ lệ tuyệt đối, nhưng trước yêu cầu buộc phải đánh giá của chính quyền, liệu người dân có thấy khó chịu không?” - ông Nhân đặt vấn đề.Với mỗi phản ánh của người dân, cơ quan chức năng sẽ kiểm tra, xử lý trong 4 giờChị Nguyễn Hồ K. - một người dân ở xã Tân Hiệp - khẳng định: “Nếu không tự nguyện, tôi cũng không cảm thấy khó chịu khi cán bộ đề nghị đánh giá. Không phải là chuyện chỉ mất 3 giây cho thao tác này mà tôi nghĩ, đó cũng là trách nhiệm của người dân đối với chính quyền. Mình thấy cán bộ đối đãi, làm việc ra sao thì cứ thế nhận xét, đánh giá thôi”. Theo chị K., thỉnh thoảng, báo chí vẫn điểm mặt, gọi tên những cán bộ lợi dụng chức vụ, nên chuyện người dân bị nhũng nhiễu, đòi hỏi vẫn là nỗi sợ mỗi khi có chuyện cần tương tác với chốn công quyền. Bản thân chị từng chứng kiến một người bạn đến cơ quan thuế ở quận X. để hoàn thành nghĩa vụ sau khi bán được căn nhà. Theo đó, dù chỉ có một căn nhà vừa bán, thuộc trường hợp miễn đóng thuế thu nhập cá nhân, nhưng tại cơ quan chức năng, cán bộ thuế vẫn “nghi ngờ”, tra vấn bạn của chị: “Tôi tra trên mạng thấy chị có đến 3 căn nhà ở quận A, quận B”. Vị cán bộ yêu cầu, để được miễn thuế, bạn của chị K. phải đi xác thực 2 căn nhà kia không do mình sở hữu.  \n          Không thể chứng minh bằng miệng, bạn của chị K. đành thất thểu ra về. Thế nhưng, vừa ra đến cửa thì cán bộ gọi giật. Giữa mớ giấy tờ ngổn ngang trên bàn, vị cán bộ viết lên một tờ giấy loại, chìa cho bạn của chị K.: “Chị có cần nhờ dịch vụ xác minh thì đây, xong trong 1 ngày, 3 triệu đồng”. Chị K. kết luận: “Đời ai cũng có nhiều việc phải gắn với chính quyền nên tôi cho rằng, đánh giá cán bộ phải là một thói quen văn minh của người dân, của thủ tục hành chính minh bạch”. Vì thế, khi đến UBND huyện Hóc Môn để lấy biên nhận xin thành lập hộ kinh doanh cá thể, dù đang rất vội, chị K. vẫn nán lại để đánh giá sự phục vụ của cán bộ.Sau khi nhận kết quả, ông Nguyễn Đình Nghĩa không chút đắn đo thực hiện những “cú đánh”Theo ông Dương Hồng Thắng - Chủ tịch UBND huyện Hóc Môn - kể từ ngày triển khai, thống kê qua phần mềm đánh giá thái độ làm việc, phục vụ của cán bộ cho kết quả gần 99% người dân bày tỏ mức độ hài lòng. Tới đây, bộ phận tiếp nhận hồ sơ của huyện cũng sẽ trang bị máy chụp hình, máy scan để phục vụ người dân tốt hơn.Mỗi người dân, một “cán bộ” đô thịNgoài trang bị iPad ngay tại đơn vị, từ tháng 4/2019, UBND H.Hóc Môn còn triển khai ứng dụng (app) “Hóc Môn trực tuyến” để kết nối người dân.Chỉ cần tải phần mềm “Hóc Môn trực tuyến”, thay vì phải đến UBND, người dân có thể ngồi tại nhà thực hiện các tương tác dịch vụ công với chính quyền huyện; như nộp hồ sơ, tra cứu thông tin quy hoạch…             Kể từ quý III/2019, UBND TP.HCM áp dụng chi trả thu nhập tăng thêm cho cán bộ, công chức, viên chức dựa trên sự hài lòng của người dân.            Phần mềm “Hóc Môn trực tuyến” cho phép lãnh đạo huyện nắm được cụ thể chất lượng làm việc, tỷ lệ hài lòng của người dân đối với từng nhân viên; qua đó dễ dàng đánh giá chỉ tiêu, chất lượng hoàn thành nhiệm vụ của từng cán bộ, công chức, viên chức.Cũng qua phần mềm này, người dân dễ dàng theo dõi, tra cứu tình trạng, tiến độ giải quyết hồ sơ của mình. Hướng đến chất lượng phục vụ của cán bộ nên phần mềm còn cho phép người dân được nhận xét, đánh giá từng khâu giải quyết hồ sơ. Nhờ đó, ngoài việc tiết kiệm thời gian, chi phí… người dân còn “đôn đốc” được cán bộ thông qua việc phản ánh chất lượng phục vụ.Ông Dương Hồng Thắng cho biết, ngoài phát huy tính dân chủ của người dân, “Hóc Môn trực tuyến” còn giúp tăng khả năng làm việc của cán bộ, điều chỉnh thái độ, loại bỏ sự nhũng nhiễu, tiêu cực. Do mỗi hạng mục nộp hồ sơ đều bao gồm các yêu cầu nộp đủ, nộp đúng, nên cán bộ tiết kiệm được thời gian kiểm tra từng loại, qua đó xử lý được nhiều hồ sơ hơn trước. Không dừng lại ở đó, “Hóc Môn trực tuyến” còn giúp chính quyền kịp thời gửi đến dân các khuyến cáo về tình hình trật tự hoặc các thông báo về chính sách, chủ trương của huyện; giúp lãnh đạo huyện điều hành, giám sát cán bộ, thông qua theo dõi tình hình xử lý hồ sơ, tiến độ giải quyết đơn thư, khiếu nại, tố cáo…Không chỉ chuyện giải quyết hồ sơ, “Hóc Môn trực tuyến” còn giúp kết nối người dân - chính quyền. Ba tháng nay, anh Quốc Hùng (xã Đông Thạnh) được bạn bè gán cho biệt danh “công dân gương mẫu”. Anh Hùng bẽn lẽn: “Tại tính tôi nhiều chuyện”.Với phần mềm “Hóc Môn trực tuyến” cài trên điện thoại, anh Hùng kể, trong phạm vi của huyện, đi đến đâu, nhìn thấy điều gì chướng mắt, anh đều mở điện thoại, phản ánh với chính quyền. Có hôm đi ngang một con kênh, thấy cống bị nghẹt, anh liền mở app, viết: “Kênh Bà Mẫn bị ứ rác, nghẹt cống, ngăn dòng chảy” rồi gửi đi, kèm tấm hình anh vừa chụp. Cũng ngay lập tức, anh nhận được tin nhắn hồi đáp: “Thông tin đã được gửi tới cơ quan chức năng thành công, sẽ được xử lý trong vòng 4 giờ”.\n Hôm khác, nhìn thấy một nắp cống bị lệch, anh Hùng cũng dừng xe, vào app gửi thông tin…“Tôi cảm thấy không thoải mái với những cái chướng mắt như vậy, nhưng ngày xưa không biết phải phản ánh với ai. Có mấy đường dây nóng cho các lĩnh vực thì cũng không làm sao nhớ nổi. Bây giờ, từ chuyện nhà hàng xóm có bạo hành, ngoài đường có ổ voi hay nhà kia tổ chức đánh bạc… tôi chỉ việc mở “Hóc Môn trực tuyến”, báo cho chính quyền” - anh Hùng nói.Tiếp nhận thông tin người dân, trong vòng 4 giờ, UBND huyện Hóc Môn nhanh chóng phân công cho cán bộ, đơn vị liên quan trực tiếp xử lý. Chủ tịch UBND huyện Hóc Môn cho hay, nếu sau 4 giờ kể từ lúc tiếp nhận phản ánh của người dân, cán bộ hữu trách không giải quyết, xem như chậm trễ, người đứng đầu đơn vị cũng phải chịu trách nhiệm. ",
            "tomTat":"Trong khi mục tiêu đến năm 2021, TPHCM phải giảm được 10% biên chế so với năm 2015, thì những năm qua, số lượng biên chế thực tế tại thành phố lại luôn cao hơn biên chế được giao. Do vậy, để đạt chỉ tiêu, các quận huyện phải nỗ lực bằng nhiều giải pháp.",
            "linkImage":"assets/images/avatar/news7.jpg",
            "ngayPhatHanh":"SGGP16/09/19 08:50 GMT+",
            "ngayHetHan":"10/15/2019 9:08:11 AM",
            "enumTinhTrang":0,
            "loai":true,
            "donViID":0,
            "dateTime":"15/10/2019",
            "isDeleted":false,
            "deleterUserId":null,
            "deletionTime":null,
            "lastModificationTime":null,
            "lastModifierUserId":null,
            "creationTime":"2019-10-15T04:27:32.564",
            "creatorUserId":null,
            "id":7
        }
           
      ]
    }
}