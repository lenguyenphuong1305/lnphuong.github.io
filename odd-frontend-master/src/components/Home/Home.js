import React from 'react'
import styles from './Home.module.css'
import bgImg from '../../images/home.jpg'
import translate from '../../translate'

class Home extends React.Component {
    render() {
        return (
            <div className={styles.container}>
                <div className={styles.quote}>
                    <q>
                        {translate(this.props.lan, "Điều dũng cảm nhất bạn có thể làm đó là chính mình")}
                    </q>
                </div>
                <img alt='thepary' src={bgImg} className={styles.bgImg}></img>
                <p className={styles.p}>
                    {translate(this.props.lan, "Tuổi vị thành niên là một giai đoạn có nhiều biến động, phát triển phức tạp hơn các giai đoạn trước, là sự chính yếu trong quá trình biến đổi từ trạng thái trẻ con thành người lớn. Trong giai đoạn này, trẻ thường xuyên có nhiều biến đổi về tâm sinh lí và chưa có sự định hướng rõ rệt về việc làm và hành vi của bản thân, khiến cho một số trẻ rơi vào tình trạng khủng hoảng tâm lí và có những hành vi nông nổi gây ảnh hưởng đến người khác.")}
                </p>
                <p className={styles.p}>
                    {translate(this.props.lan, "Ở tuổi vị thành niên thường xuyên xảy ra những rối loạn về tâm lí, rối loạn lo âu, rối loạn hành vi chống đối xã hội,.. Trong đó, Chứng rối loạn thách thức đối lập ảnh hưởng từ 1 - 11% dân số trẻ em nói chung trên toàn thế giới (theo nghiên của DSM-V), và ảnh hưởng nặng nhất đến trẻ vị thành niên – những đối tượng có sự thay đổi về tâm sinh lí rõ rệt nhất. Website này được tạo ra nhằm mục đích khảo sát mức độ dựa trên các câu hỏi dưới hình thức trắc nghiệm và đưa ra lời khuyên cho những trẻ em đang trong độ tuổi vị thành niên có nguy cơ mắc Chứng rối loạn thách thức đối lập.")}
                </p>
            </div>
        )
    }
}

export default Home