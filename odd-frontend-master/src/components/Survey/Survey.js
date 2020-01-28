import React from 'react'
import styles from './Survey.module.css'
import * as ReactSurvey from "survey-react";
import "survey-react/survey.css";
import axios from 'axios'
import { Spin, Icon } from 'antd';
import translate from '../../translate'

class Survey extends React.Component {
    state = {
        result: "",
        loading: false
    }

    sample = { "hoten": "Trương Hoàng Giang", "gioitinh": "1", "tuoi": "21", "truong": "uet", "tinh": "1", "dantoc": "1", "conthu": "2", "honnhan": "1", "ykien": { "1": "3", "2": "3", "3": "3", "4": "3", "5": "3", "6": "3", "7": "3", "8": "3", "9": "3", "10": "3", "11": "3", "12": "3", "13": "3", "14": "3", "15": "3", "16": "3", "17": "3", "18": "3", "19": "3", "20": "3", "21": "3", "22": "3", "23": "3", "24": "3", "25": "3", "26": "3", "27": "3", "28": "3", "29": "3", "30": "3", "31": "3", "32": "3", "33": "3", "34": "3", "35": "3", "36": "3", "37": "3", "38": "3", "39": "3", "40": "3", "41": "3", "42": "3", "43": "3", "44": "3", "45": "3", "46": "3", "47": "3", "48": "3", "49": "3", "50": "3", "51": "3", "52": "3", "53": "3", "54": "3", "55": "3" } }

    onComplete = (survey, options) => {
        this.setState({loading: true, result: ""})
        axios.post("http://thptlaocai1.edu.vn:5000/survey", survey.data)
        .then(response => {
            this.setState({loading: false, result: response.data})
        })
        .catch(error => console.log(error))
    }

    componentDidMount() {
        if (document.querySelector('input.sv_complete_btn')) {
            document.querySelector('input.sv_complete_btn').value = translate(this.props.lan, "Hoàn thành");
        }
    }

    render() {
        const formJson = {
            "elements": [
                {
                    "type": "text",
                    "name": "hoten",
                    "title": translate(this.props.lan, "Họ và tên"),
                    "isRequired": true
                },
                {
                    "type": "radiogroup",
                    "name": "gioitinh",
                    "title": translate(this.props.lan, "Giới tính"),
                    "isRequired": true,
                    "choices": [
                        {
                            "value": "1",
                            "text": translate(this.props.lan, "Nam")
                        },
                        {
                            "value": "2",
                            "text": translate(this.props.lan, "Nữ")
                        }
                    ]
                },
                {
                    "type": "text",
                    "name": "tuoi",
                    "title": translate(this.props.lan, "Tuổi"),
                    "isRequired": true,
                    "validators": [
                        {
                            "type": "numeric",
                            "minValue": 0,
                            "maxValue": 100
                        }
                    ]
                },
                {
                    "type": "text",
                    "name": "truong",
                    "title": translate(this.props.lan, "Trường"),
                    "isRequired": true
                },
                {
                    "type": "radiogroup",
                    "name": "tinh",
                    "title": translate(this.props.lan, "Nơi cư trú"),
                    "isRequired": true,
                    "choices": [
                        {
                            "value": "1",
                            "text": translate(this.props.lan, "Thành phố")
                        },
                        {
                            "value": "2",
                            "text": translate(this.props.lan, "Thị trấn")
                        },
                        {
                            "value": "3",
                            "text": translate(this.props.lan, "Nông thôn")
                        }
                    ]
                },
                {
                    "type": "radiogroup",
                    "name": "dantoc",
                    "title": translate(this.props.lan, "Dân tộc"),
                    "isRequired": true,
                    "choices": [
                        {
                            "value": "1",
                            "text": translate(this.props.lan, "Kinh")
                        },
                        {
                            "value": "2",
                            "text": translate(this.props.lan, "Thiểu số")
                        }
                    ]
                },
                {
                    "type": "text",
                    "name": "conthu",
                    "title": translate(this.props.lan, "Bạn là con thứ mấy trong gia đình? (Bạn vui lòng chỉ ghi bằng số: 1, 2, 3,... VD: 1)"),
                    "isRequired": true,
                    "validators": [
                        {
                            "type": "numeric",
                            "minValue": 1
                        }
                    ]
                },
                {
                    "type": "radiogroup",
                    "name": "honnhan",
                    "title": translate(this.props.lan, "Tình trạng hôn nhân của bố mẹ"),
                    "isRequired": true,
                    "choices": [
                        {
                            "value": "1",
                            "text": translate(this.props.lan, "Bình thường")
                        },
                        {
                            "value": "2",
                            "text": translate(this.props.lan, "Ly thân")
                        },
                        {
                            "value": "3",
                            "text": translate(this.props.lan, "Ly dị")
                        },
                        {
                            "value": "4",
                            "text": translate(this.props.lan, "Mồ côi")
                        }
                    ]
                },
                {
                    "type": "matrix",
                    "name": "ykien",
                    "title": translate(this.props.lan, "Lấy ý kiến"),
                    "isRequired": true,
                    "columns": [
                        {
                            "value": "1",
                            "text": translate(this.props.lan, "Không bao giờ")
                        },
                        {
                            "value": "2",
                            "text": translate(this.props.lan, "Hiếm khi")
                        },
                        {
                            "value": "3",
                            "text": translate(this.props.lan, "Thỉnh thoảng")
                        },
                        {
                            "value": "4",
                            "text": translate(this.props.lan, "Thường xuyên")
                        },
                        {
                            "value": "5",
                            "text": translate(this.props.lan, "Rất thường xuyên")
                        }
                    ],
                    "rows": [
                        {
                            "value": 1,
                            "text": translate(this.props.lan, "Bạn hay đổ lỗi cho người khác về lỗi lầm, hành vi sai trái của mình.")
                        },
                        {
                            "value": 2,
                            "text": translate(this.props.lan, "Bạn hay tranh cãi, không tuân theo người khác.")
                        },
                        {
                            "value": 3,
                            "text": translate(this.props.lan, "Bạn có những hành động mang tính thách thức, từ chối làm theo quy tắc.")
                        },
                        {
                            "value": 4,
                            "text": translate(this.props.lan, "Bạn tức giận, không nghe theo lời người lớn.")
                        },
                        {
                            "value": 5,
                            "text": translate(this.props.lan, "Bạn nói dối người khác.")
                        },
                        {
                            "value": 6,
                            "text": translate(this.props.lan, "Bạn chửi thề, sử dụng những ngôn ngữ tục tĩu khi tâm trạng không tốt, ức chế.")
                        },
                        {
                            "value": 7,
                            "text": translate(this.props.lan, "Bạn là một người sống khép mình, không cởi mở với người khác.")
                        },
                        {
                            "value": 8,
                            "text": translate(this.props.lan, "Bạn thù hằn lâu, luôn tìm ý định trả thù người khác.")
                        },
                        {
                            "value": 9,
                            "text": translate(this.props.lan, "Bạn cố ý làm phiền, trêu tức khiến người khác khó chịu.")
                        },
                        {
                            "value": 10,
                            "text": translate(this.props.lan, "Bạn bị thầy cô phê bình, khiển trách khi mắc lỗi.")
                        },
                        {
                            "value": 11,
                            "text": translate(this.props.lan, "Bạn bị bố mẹ phê bình, khiển trách khi mắc lỗi.")
                        },
                        {
                            "value": 12,
                            "text": translate(this.props.lan, "Bạn bị bạn bè phê bình, khiển trách.")
                        },
                        {
                            "value": 13,
                            "text": translate(this.props.lan, "Bạn bị người khác đổ lỗi.")
                        },
                        {
                            "value": 14,
                            "text": translate(this.props.lan, "Bạn dễ tự ái, phật ý với những việc không vừa lòng.")
                        },
                        {
                            "value": 15,
                            "text": translate(this.props.lan, "Bạn thấy mặc cảm, tự ti về bản thân.")
                        },
                        {
                            "value": 16,
                            "text": translate(this.props.lan, "Bạn cảm thấy tủi thân, uất ức khi bị kì thị, xa lánh")
                        },
                        {
                            "value": 17,
                            "text": translate(this.props.lan, "Bạn cảm thấy khó chịu khi cha mẹ không tin tưởng, kiểm soát quá mức.")
                        },
                        {
                            "value": 18,
                            "text": translate(this.props.lan, "Bạn cảm thấy tổn thương, sợ hãi khi bị bạo hành tại gia đình.")
                        },
                        {
                            "value": 19,
                            "text": translate(this.props.lan, "Bạn thấy tổn thương, sợ hãi khi bị bạo hành tại trường học, ngoài xã hội.")
                        },
                        {
                            "value": 20,
                            "text": translate(this.props.lan, "Bạn muốn tự hủy hoại, gây thương tích cho bản thân.")
                        },
                        {
                            "value": 21,
                            "text": translate(this.props.lan, "Bạn đã từng hủy hoại, gây thương tích cho bản thân.")
                        },
                        {
                            "value": 22,
                            "text": translate(this.props.lan, "Bạn muốn gây thương tích cho động vật, con người.")
                        },
                        {
                            "value": 23,
                            "text": translate(this.props.lan, "Bạn đã từng có hành vi tàn bạo, độc ác cho động vật, con người.")
                        },
                        {
                            "value": 24,
                            "text": translate(this.props.lan, "Bạn cảm thấy tức giận với thế giới.")
                        },
                        {
                            "value": 25,
                            "text": translate(this.props.lan, "Bạn muốn nổi loạn, vi phạm pháp luật như cố tình đốt cháy, phá hoại, ăn cắp...")
                        },
                        {
                            "value": 26,
                            "text": translate(this.props.lan, "Bạn đã từng có các hành vi vi phạm pháp luật như cố tình đốt cháy, phá hoại, ăn cắp...")
                        },
                        {
                            "value": 27,
                            "text": translate(this.props.lan, "Cha mẹ bạn mất niềm tin vào con cái.")
                        },
                        {
                            "value": 28,
                            "text": translate(this.props.lan, "Cha mẹ bạn không dành thời gian để tâm sự, chia sẻ với con.")
                        },
                        {
                            "value": 29,
                            "text": translate(this.props.lan, "Cha mẹ không khích lệ, tán thưởng những thành tích tốt mà con đạt được.")
                        },
                        {
                            "value": 30,
                            "text": translate(this.props.lan, "Thầy cô không tạo điều kiện để học sinh  phát triển tài năng của bản thân.")
                        },
                        {
                            "value": 31,
                            "text": translate(this.props.lan, "Thầy cô không tin tưởng khi giao nhiệm vụ cho học sinh.")
                        },
                        {
                            "value": 32,
                            "text": translate(this.props.lan, "Bạn bè cùa bạn không đoàn kết, giúp đỡ nhau trong học tập, cuộc sống.")
                        },
                        {
                            "value": 33,
                            "text": translate(this.props.lan, "Bạn bị bạn bè xúc phạm nhân phẩm, danh dự.")
                        },
                        {
                            "value": 34,
                            "text": translate(this.props.lan, "Bạn bị bạn bè đố kị, ganh ghét.")
                        },
                        {
                            "value": 35,
                            "text": translate(this.props.lan, "Mọi người không nhìn nhận được khả năng, sự đóng góp của bạn đối với xã hội.")
                        },
                        {
                            "value": 36,
                            "text": translate(this.props.lan, "Bạn bị mọi người  soi mói, chỉ trích.")
                        },
                        {
                            "value": 37,
                            "text": translate(this.props.lan, "Bạn bị kì thị, xa lánh, phân biệt trong cộng đồng.")
                        },
                        {
                            "value": 38,
                            "text": translate(this.props.lan, "Bạn không muốn chia sẻ những tâm tư, nguyện vọng của bản thân với người khác.")
                        },
                        {
                            "value": 39,
                            "text": translate(this.props.lan, "Bạn nhạy cảm, dễ bị tác động bởi những yếu tố bên ngoài.")
                        },
                        {
                            "value": 40,
                            "text": translate(this.props.lan, "Bạn mặc cảm, tự ti vì hoàn cảnh gia đình: bố mẹ ly dị, bố (mẹ) đã chết...")
                        },
                        {
                            "value": 41,
                            "text": translate(this.props.lan, "Bạn mặc cảm, tự ti vì hoàn cảnh gia đình kinh tế khó khăn.")
                        },
                        {
                            "value": 42,
                            "text": translate(this.props.lan, "Bạn bị kích động do hay xem các hình ảnh, video, game có nội dung bạo lực.")
                        },
                        {
                            "value": 43,
                            "text": translate(this.props.lan, "Bạn mong muốn mình trở nên có trách nhiệm hơn bản thân.")
                        },
                        {
                            "value": 44,
                            "text": translate(this.props.lan, "Bạn muốn nói lời xin lỗi sau mỗi lần tranh cãi, không nghe lời cha mẹ.")
                        },
                        {
                            "value": 45,
                            "text": translate(this.props.lan, "Bạn muốn người khác thấu hiểu, tôn trọng mình.")
                        },
                        {
                            "value": 46,
                            "text": translate(this.props.lan, "Bạn muốn bản thân mình trở nên bản lĩnh, bình tĩnh giải quyết mọi tình huống.")
                        },
                        {
                            "value": 47,
                            "text": translate(this.props.lan, "Bạn muốn được bày tỏ quan điểm, ý kiến cá nhân của mình với mọi người.")
                        },
                        {
                            "value": 48,
                            "text": translate(this.props.lan, "Bạn muốn cha mẹ dành thời gian để quan tâm, chia sẻ với con cái.")
                        },
                        {
                            "value": 49,
                            "text": translate(this.props.lan, "Bạn mong muốn được chia sẻ những khúc mắc, vấn đề khó khăn với thầy cô.")
                        },
                        {
                            "value": 50,
                            "text": translate(this.props.lan, "Bạn mong muốn thầy cô không quá kì vọng vào thành tích học tập của bạn.")
                        },
                        {
                            "value": 51,
                            "text": translate(this.props.lan, "Bạn mong muốn được thầy cô ủng hộ, tạo điều kiện để phát triển tài năng của bạn.")
                        },
                        {
                            "value": 52,
                            "text": translate(this.props.lan, "Bạn muốn chia sẻ những niềm vui, nỗi buồn với bạn bè. ")
                        },
                        {
                            "value": 53,
                            "text": translate(this.props.lan, "Bạn mong muốn được bạn bè tôn trọng.")
                        },
                        {
                            "value": 54,
                            "text": translate(this.props.lan, "Bạn mong muốn xã hội nhìn nhận khả năng, sự cống hiến của bạn.")
                        },
                        {
                            "value": 55,
                            "text": translate(this.props.lan, "Bạn muốn được tham gia vào các hoạt động công ích của xã hội.")
                        }
                    ],
                    "isAllRowRequired": true
                }
            ]
        }
        const model = new ReactSurvey.Model(formJson);

        const resultDes = {
            "1": {
                title: <span style={{ color: "#007944"}}>{translate(this.props.lan, "Rất thấp")}</span>,
                description: translate(this.props.lan, "Kết quả cho thấy bạn không có những dấu hiệu của Chứng rối loạn thách thức đối lập. Bạn nên tiếp tục quan tâm đến bản thân mình hơn. Cảm ơn bạn đã tham gia bài khảo sát của chúng tôi!")
            },
            "2": {
                title: <span style={{ color: "#71a95a" }}>{translate(this.props.lan, "Thấp")}</span>,
                description: translate(this.props.lan, "Kết quả cho thấy những dấu hiệu của Chứng rối loạn thách thức đối lập ở bạn chưa biểu hiện rõ. Bạn nên tiếp tục theo dõi và quan tâm tới bản thân mình. Cảm ơn bạn đã tham gia bài khảo sát của chúng tôi!")
            },
            "3": {
                title: <span style={{ color: "#f39422" }}>{translate(this.props.lan, "Trung bình")}</span>,
                description: translate(this.props.lan, "Kết quả cho thấy Chứng rối loạn thách thức đối lập ở bạn đang có dấu hiệu phát triển. Lúc này, bạn nên dành nhiều thời gian để quan tâm hơn đến bản thân mình. Cảm ơn bạn đã tham gia bài khảo sát của chúng tôi!")
            },
            "4": {
                title: <span style={{ color: "#ef4339" }}>{translate(this.props.lan, "Cao")}</span>,
                description: translate(this.props.lan, "Kết quả cho thấy những biểu hiện của Chứng rối loạn thách thức đối lập ở bạn đang phát triển rõ rệt. Bạn cần phải được tư vấn và tìm sự giúp đỡ từ người lớn và các chuyên gia tâm lí. Cảm ơn bạn đã tham gia bài khảo sát của chúng tôi!")
            },
            "5": {
                title: <span style={{ color: "#9d0b0b" }}>{translate(this.props.lan, "Rất cao")}</span>,
                description: translate(this.props.lan, "Kết quả cho thấy bạn đã bị mắc Chứng rối loạn thách thức đối lập ở mức độ nặng và hành vi có thể gây ảnh hưởng xấu đến những người xung quanh. Bạn cần phải được tưu vấn và có sự hỗ trợ kịp thời từ các chuyên gia tâm lí. Cảm ơn bạn đã tham gia bài khảo sát của chúng tôi!")
            }
        }

        return (
            <div className={styles.container}>
                {this.state.loading ? (
                    <div className={styles.result}>
                        <Spin indicator={<Icon type="loading" style={{ fontSize: 50, color: "black" }} />} ></Spin>
                    </div>
                ) : this.state.result ? (
                    <div className={styles.result}>
                        <div className={styles.resultTitle}>{translate(this.props.lan, "Kết quả của bạn là:")} {resultDes[this.state.result].title}</div>
                        <div>{resultDes[this.state.result].description}</div>
                    </div>
                ) : <div>
                    {/* <button onClick={() => this.onComplete({ data: this.sample })}>gui</button> */}
                    <ReactSurvey.Survey model={model} onComplete={this.onComplete} />
                </div>}
                
            </div>
        )
    }
}

export default Survey
