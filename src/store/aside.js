export default {
  state: {
    is_expand: true,
    aside_data: {
      // 用户
      "0": [
        {
          path: '/home',
          name: 'Home',
          label: '首页',
          icon: 'home',
          url: '/home'
        },
        {
          path: '/doctor-query',
          name: 'DoctorQuery',
          label: '预约挂号',
          icon: 'insert_invitation',
          url: '/doctor-query',
        },
        {
          path: '/disease-inquiry',
          name: 'DiseaseInquiry',
          label: '常见病信息',
          icon: 'coronavirus',
          url: '/care/CareServiceMine',
        },
        {
          path: '/medical-history',
          name: 'MedicalHistory',
          label: '就诊历史',
          icon: 'calendar_month',
          url: '/MedicalHistory',
        },
      ],

      // 医生
      "1": [],

      // 管理员
      "2": [
        {
          path: '/Admin/order',
          name: 'AdminOrder',
          label: '处方订单管理',
          icon: 'list_alt',
          url: '/Admin/order',
        },
        {
          path: '/Admin/medicine',
          name: 'AdminMedicine',
          label: '药品库存管理',
          icon: 'warehouse',
          url: '/Admin/medicine',
        },
        {
          path: '/Admin/doctor',
          name: 'AdminDoctor',
          label: '医生坐诊管理',
          icon: 'medication',
          url: '/Admin/doctor',
        },
        {
          path: '/Admin/feedback',
          name: 'AdminFeedback',
          label: '就诊反馈管理',
          icon: 'comment',
          url: '/Admin/feedback',
        },
        {
          path: '/Admin/checkin',
          name: 'AdminCheckin',
          label: '挂号患者报到',
          icon: 'task_alt',
          url: '/Admin/checkin',
        },
        {
          path: '/Admin/MedicineCount',
          name: 'MedicineCount',
          label: '药品营收统计',
          icon: 'receipt_long',
          url: '/Admin/MedicineCount',
        }
      ],

      // {
      //   label: '就诊历史',
      //   icon: 'Help',
      //   path: '/medical',
      //   children: [
      //     {
      //       path: '/hReport',
      //       name: 'HReport',
      //       label: '1',
      //       icon: 'setting',
      //       url: '/medical/hReport',
      //     },
      //     {
      //       path: '/doctorComment',
      //       name: 'DoctorComment',
      //       label: '2',
      //       icon: 'setting',
      //       url: '/medical/doctorComment',
      //     },
      //     {
      //       path: '/medicalServiceHistory',
      //       name: 'MedicalServiceHistory',
      //       label: '3',
      //       icon: 'setting',
      //       url: '/medical/medicalServiceHistory',
      //     },
      //   ]
      // },

    },
    aside_title: { //导航栏标题
      "0": '济康同行',
      "1": '济康同行-医生端',
      "2": '济康同行-管理员端',
    },
    isCollapse: false
  },

  mutations: {
    //设置数据
    collapseMenu(state) {
      state.isCollapse = !state.isCollapse
    }
  }
}
