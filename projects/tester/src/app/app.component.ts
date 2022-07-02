import { Component, OnInit } from '@angular/core';
import { NgmDataSource } from 'ngm-tree-grid';
import { INgmExpansion, INgmTreeGridConfig } from 'ngm-tree-grid';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'tester';
  data = [
    {
      "nodes": [
        {
          "nodes": [
            {
              "nodes": null,
              "id": 25775,
              "title": {
                "caption": "تنظیمات علاقه مندی ها"
              },
              "moduleTitle": {
                "caption": "علاقه مندی ها"
              },
              "menuTitle": {
                "caption": "علاقه مندی های من"
              },
              "formTitle": {
                "caption": "تنظیمات علاقه مندی ها"
              },
              "subMenuTitle": null,
              "tabFormTitle": null,
              "itemType": 4
            }
          ],
          "id": 10736,
          "title": {
            "caption": "علاقه مندی های من"
          },
          "moduleTitle": {
            "caption": "علاقه مندی ها"
          },
          "menuTitle": {
            "caption": "علاقه مندی های من"
          },
          "formTitle": null,
          "subMenuTitle": null,
          "tabFormTitle": null,
          "itemType": 2
        }
      ],
      "id": 5343,
      "title": {
        "caption": "علاقه مندی ها"
      },
      "moduleTitle": {
        "caption": "علاقه مندی ها"
      },
      "menuTitle": null,
      "formTitle": null,
      "subMenuTitle": null,
      "tabFormTitle": null,
      "itemType": 1
    },
    {
      "nodes": [
        {
          "nodes": [
            {
              "nodes": null,
              "id": 25776,
              "title": {
                "caption": "آلارم های خوانده نشده"
              },
              "moduleTitle": {
                "caption": "کارتابل"
              },
              "menuTitle": {
                "caption": "آلارم های صادر شده"
              },
              "formTitle": {
                "caption": "آلارم های خوانده نشده"
              },
              "subMenuTitle": null,
              "tabFormTitle": null,
              "itemType": 4
            },
            {
              "nodes": null,
              "id": 25777,
              "title": {
                "caption": "بایگانی آلارم ها"
              },
              "moduleTitle": {
                "caption": "کارتابل"
              },
              "menuTitle": {
                "caption": "آلارم های صادر شده"
              },
              "formTitle": {
                "caption": "بایگانی آلارم ها"
              },
              "subMenuTitle": null,
              "tabFormTitle": null,
              "itemType": 4
            }
          ],
          "id": 10737,
          "title": {
            "caption": "آلارم های صادر شده"
          },
          "moduleTitle": {
            "caption": "کارتابل"
          },
          "menuTitle": {
            "caption": "آلارم های صادر شده"
          },
          "formTitle": null,
          "subMenuTitle": null,
          "tabFormTitle": null,
          "itemType": 2
        }
      ],
      "id": 5344,
      "title": {
        "caption": "کارتابل"
      },
      "moduleTitle": {
        "caption": "کارتابل"
      },
      "menuTitle": null,
      "formTitle": null,
      "subMenuTitle": null,
      "tabFormTitle": null,
      "itemType": 1
    },
    {
      "nodes": [
        {
          "nodes": [
            {
              "nodes": null,
              "id": 25738,
              "title": {
                "caption": "انواع استخدام"
              },
              "moduleTitle": {
                "caption": "سازمان"
              },
              "menuTitle": {
                "caption": "اطلاعات پایه"
              },
              "formTitle": {
                "caption": "انواع استخدام"
              },
              "subMenuTitle": null,
              "tabFormTitle": null,
              "itemType": 4
            },
            {
              "nodes": null,
              "id": 25739,
              "title": {
                "caption": "گروه شغلی"
              },
              "moduleTitle": {
                "caption": "سازمان"
              },
              "menuTitle": {
                "caption": "اطلاعات پایه"
              },
              "formTitle": {
                "caption": "گروه شغلی"
              },
              "subMenuTitle": null,
              "tabFormTitle": null,
              "itemType": 4
            },
            {
              "nodes": null,
              "id": 25740,
              "title": {
                "caption": "مشاغل و مشخصات مربوطه"
              },
              "moduleTitle": {
                "caption": "سازمان"
              },
              "menuTitle": {
                "caption": "اطلاعات پایه"
              },
              "formTitle": {
                "caption": "مشاغل و مشخصات مربوطه"
              },
              "subMenuTitle": null,
              "tabFormTitle": null,
              "itemType": 4
            },
            {
              "nodes": null,
              "id": 25741,
              "title": {
                "caption": "مقاطع تحصیلی"
              },
              "moduleTitle": {
                "caption": "سازمان"
              },
              "menuTitle": {
                "caption": "اطلاعات پایه"
              },
              "formTitle": {
                "caption": "مقاطع تحصیلی"
              },
              "subMenuTitle": null,
              "tabFormTitle": null,
              "itemType": 4
            },
            {
              "nodes": null,
              "id": 25742,
              "title": {
                "caption": "رشته/تخصص تحصیلی"
              },
              "moduleTitle": {
                "caption": "سازمان"
              },
              "menuTitle": {
                "caption": "اطلاعات پایه"
              },
              "formTitle": {
                "caption": "رشته/تخصص تحصیلی"
              },
              "subMenuTitle": null,
              "tabFormTitle": null,
              "itemType": 4
            },
            {
              "nodes": null,
              "id": 25743,
              "title": {
                "caption": "ماهیت محل"
              },
              "moduleTitle": {
                "caption": "سازمان"
              },
              "menuTitle": {
                "caption": "اطلاعات پایه"
              },
              "formTitle": {
                "caption": "ماهیت محل"
              },
              "subMenuTitle": null,
              "tabFormTitle": null,
              "itemType": 4
            },
            {
              "nodes": null,
              "id": 25744,
              "title": {
                "caption": "واحدهای اندازه گیری"
              },
              "moduleTitle": {
                "caption": "سازمان"
              },
              "menuTitle": {
                "caption": "اطلاعات پایه"
              },
              "formTitle": {
                "caption": "واحدهای اندازه گیری"
              },
              "subMenuTitle": null,
              "tabFormTitle": null,
              "itemType": 4
            },
            {
              "nodes": null,
              "id": 25745,
              "title": {
                "caption": "سایز"
              },
              "moduleTitle": {
                "caption": "سازمان"
              },
              "menuTitle": {
                "caption": "اطلاعات پایه"
              },
              "formTitle": {
                "caption": "سایز"
              },
              "subMenuTitle": null,
              "tabFormTitle": null,
              "itemType": 4
            },
            {
              "nodes": null,
              "id": 25746,
              "title": {
                "caption": "شیفت کاری"
              },
              "moduleTitle": {
                "caption": "سازمان"
              },
              "menuTitle": {
                "caption": "اطلاعات پایه"
              },
              "formTitle": {
                "caption": "شیفت کاری"
              },
              "subMenuTitle": null,
              "tabFormTitle": null,
              "itemType": 4
            },
            {
              "nodes": null,
              "id": 25747,
              "title": {
                "caption": "زمینه فعالیت"
              },
              "moduleTitle": {
                "caption": "سازمان"
              },
              "menuTitle": {
                "caption": "اطلاعات پایه"
              },
              "formTitle": {
                "caption": "زمینه فعالیت"
              },
              "subMenuTitle": null,
              "tabFormTitle": null,
              "itemType": 4
            },
            {
              "nodes": null,
              "id": 25748,
              "title": {
                "caption": "استان"
              },
              "moduleTitle": {
                "caption": "سازمان"
              },
              "menuTitle": {
                "caption": "اطلاعات پایه"
              },
              "formTitle": {
                "caption": "استان"
              },
              "subMenuTitle": null,
              "tabFormTitle": null,
              "itemType": 4
            },
            {
              "nodes": null,
              "id": 25749,
              "title": {
                "caption": "شهر"
              },
              "moduleTitle": {
                "caption": "سازمان"
              },
              "menuTitle": {
                "caption": "اطلاعات پایه"
              },
              "formTitle": {
                "caption": "شهر"
              },
              "subMenuTitle": null,
              "tabFormTitle": null,
              "itemType": 4
            },
            {
              "nodes": null,
              "id": 25841,
              "title": {
                "caption": "عوامل زیان آور شغل"
              },
              "moduleTitle": {
                "caption": "سازمان"
              },
              "menuTitle": {
                "caption": "اطلاعات پایه"
              },
              "formTitle": {
                "caption": "مشاغل و مشخصات مربوطه"
              },
              "subMenuTitle": null,
              "tabFormTitle": {
                "caption": "عوامل زیان آور شغل"
              },
              "itemType": 5
            },
            {
              "nodes": null,
              "id": 25842,
              "title": {
                "caption": "ریسک های شغل"
              },
              "moduleTitle": {
                "caption": "سازمان"
              },
              "menuTitle": {
                "caption": "اطلاعات پایه"
              },
              "formTitle": {
                "caption": "مشاغل و مشخصات مربوطه"
              },
              "subMenuTitle": null,
              "tabFormTitle": {
                "caption": "ریسک های شغل"
              },
              "itemType": 5
            },
            {
              "nodes": null,
              "id": 25843,
              "title": {
                "caption": "آموزش های مورد نیاز شغل"
              },
              "moduleTitle": {
                "caption": "سازمان"
              },
              "menuTitle": {
                "caption": "اطلاعات پایه"
              },
              "formTitle": {
                "caption": "مشاغل و مشخصات مربوطه"
              },
              "subMenuTitle": null,
              "tabFormTitle": {
                "caption": "آموزش های مورد نیاز شغل"
              },
              "itemType": 5
            },
            {
              "nodes": null,
              "id": 25844,
              "title": {
                "caption": "معاینات مورد نیاز شغل"
              },
              "moduleTitle": {
                "caption": "سازمان"
              },
              "menuTitle": {
                "caption": "اطلاعات پایه"
              },
              "formTitle": {
                "caption": "مشاغل و مشخصات مربوطه"
              },
              "subMenuTitle": null,
              "tabFormTitle": {
                "caption": "معاینات مورد نیاز شغل"
              },
              "itemType": 5
            },
            {
              "nodes": null,
              "id": 25845,
              "title": {
                "caption": "آزمایشات مورد نیاز شغل"
              },
              "moduleTitle": {
                "caption": "سازمان"
              },
              "menuTitle": {
                "caption": "اطلاعات پایه"
              },
              "formTitle": {
                "caption": "مشاغل و مشخصات مربوطه"
              },
              "subMenuTitle": null,
              "tabFormTitle": {
                "caption": "آزمایشات مورد نیاز شغل"
              },
              "itemType": 5
            },
            {
              "nodes": null,
              "id": 25846,
              "title": {
                "caption": "لوازم حفاظتی مورد نیاز شغل"
              },
              "moduleTitle": {
                "caption": "سازمان"
              },
              "menuTitle": {
                "caption": "اطلاعات پایه"
              },
              "formTitle": {
                "caption": "مشاغل و مشخصات مربوطه"
              },
              "subMenuTitle": null,
              "tabFormTitle": {
                "caption": "لوازم حفاظتی مورد نیاز شغل"
              },
              "itemType": 5
            },
            {
              "nodes": null,
              "id": 25847,
              "title": {
                "caption": "شرح وظایف"
              },
              "moduleTitle": {
                "caption": "سازمان"
              },
              "menuTitle": {
                "caption": "اطلاعات پایه"
              },
              "formTitle": {
                "caption": "مشاغل و مشخصات مربوطه"
              },
              "subMenuTitle": null,
              "tabFormTitle": {
                "caption": "شرح وظایف"
              },
              "itemType": 5
            },
            {
              "nodes": null,
              "id": 25848,
              "title": {
                "caption": "شرایط احراز"
              },
              "moduleTitle": {
                "caption": "سازمان"
              },
              "menuTitle": {
                "caption": "اطلاعات پایه"
              },
              "formTitle": {
                "caption": "مشاغل و مشخصات مربوطه"
              },
              "subMenuTitle": null,
              "tabFormTitle": {
                "caption": "شرایط احراز"
              },
              "itemType": 5
            }
          ],
          "id": 10726,
          "title": {
            "caption": "اطلاعات پایه"
          },
          "moduleTitle": {
            "caption": "سازمان"
          },
          "menuTitle": {
            "caption": "اطلاعات پایه"
          },
          "formTitle": null,
          "subMenuTitle": null,
          "tabFormTitle": null,
          "itemType": 2
        },
        {
          "nodes": [
            {
              "nodes": null,
              "id": 25750,
              "title": {
                "caption": "اطلاعات سازمان/شرکت"
              },
              "moduleTitle": {
                "caption": "سازمان"
              },
              "menuTitle": {
                "caption": "اطلاعات سازمان/شرکت"
              },
              "formTitle": {
                "caption": "اطلاعات سازمان/شرکت"
              },
              "subMenuTitle": null,
              "tabFormTitle": null,
              "itemType": 4
            },
            {
              "nodes": null,
              "id": 25751,
              "title": {
                "caption": "محل ها و مشخصات مربوطه"
              },
              "moduleTitle": {
                "caption": "سازمان"
              },
              "menuTitle": {
                "caption": "اطلاعات سازمان/شرکت"
              },
              "formTitle": {
                "caption": "محل ها و مشخصات مربوطه"
              },
              "subMenuTitle": null,
              "tabFormTitle": null,
              "itemType": 4
            },
            {
              "nodes": null,
              "id": 25752,
              "title": {
                "caption": "دپارتمان"
              },
              "moduleTitle": {
                "caption": "سازمان"
              },
              "menuTitle": {
                "caption": "اطلاعات سازمان/شرکت"
              },
              "formTitle": {
                "caption": "دپارتمان"
              },
              "subMenuTitle": null,
              "tabFormTitle": null,
              "itemType": 4
            },
            {
              "nodes": null,
              "id": 25753,
              "title": {
                "caption": "سمت/پست سازمانی"
              },
              "moduleTitle": {
                "caption": "سازمان"
              },
              "menuTitle": {
                "caption": "اطلاعات سازمان/شرکت"
              },
              "formTitle": {
                "caption": "سمت/پست سازمانی"
              },
              "subMenuTitle": null,
              "tabFormTitle": null,
              "itemType": 4
            },
            {
              "nodes": null,
              "id": 25849,
              "title": {
                "caption": "مستندات "
              },
              "moduleTitle": {
                "caption": "سازمان"
              },
              "menuTitle": {
                "caption": "اطلاعات سازمان/شرکت"
              },
              "formTitle": {
                "caption": "اطلاعات سازمان/شرکت"
              },
              "subMenuTitle": null,
              "tabFormTitle": {
                "caption": "مستندات "
              },
              "itemType": 5
            },
            {
              "nodes": null,
              "id": 25850,
              "title": {
                "caption": "عوامل زیان آور محل"
              },
              "moduleTitle": {
                "caption": "سازمان"
              },
              "menuTitle": {
                "caption": "اطلاعات سازمان/شرکت"
              },
              "formTitle": {
                "caption": "محل ها و مشخصات مربوطه"
              },
              "subMenuTitle": null,
              "tabFormTitle": {
                "caption": "عوامل زیان آور محل"
              },
              "itemType": 5
            },
            {
              "nodes": null,
              "id": 25851,
              "title": {
                "caption": "ریسک های محل"
              },
              "moduleTitle": {
                "caption": "سازمان"
              },
              "menuTitle": {
                "caption": "اطلاعات سازمان/شرکت"
              },
              "formTitle": {
                "caption": "محل ها و مشخصات مربوطه"
              },
              "subMenuTitle": null,
              "tabFormTitle": {
                "caption": "ریسک های محل"
              },
              "itemType": 5
            },
            {
              "nodes": null,
              "id": 25852,
              "title": {
                "caption": "آموزش های مورد نیاز محل"
              },
              "moduleTitle": {
                "caption": "سازمان"
              },
              "menuTitle": {
                "caption": "اطلاعات سازمان/شرکت"
              },
              "formTitle": {
                "caption": "محل ها و مشخصات مربوطه"
              },
              "subMenuTitle": null,
              "tabFormTitle": {
                "caption": "آموزش های مورد نیاز محل"
              },
              "itemType": 5
            },
            {
              "nodes": null,
              "id": 25853,
              "title": {
                "caption": "معاینات مورد نیاز محل"
              },
              "moduleTitle": {
                "caption": "سازمان"
              },
              "menuTitle": {
                "caption": "اطلاعات سازمان/شرکت"
              },
              "formTitle": {
                "caption": "محل ها و مشخصات مربوطه"
              },
              "subMenuTitle": null,
              "tabFormTitle": {
                "caption": "معاینات مورد نیاز محل"
              },
              "itemType": 5
            },
            {
              "nodes": null,
              "id": 25854,
              "title": {
                "caption": "آزمایشات مورد نیاز محل"
              },
              "moduleTitle": {
                "caption": "سازمان"
              },
              "menuTitle": {
                "caption": "اطلاعات سازمان/شرکت"
              },
              "formTitle": {
                "caption": "محل ها و مشخصات مربوطه"
              },
              "subMenuTitle": null,
              "tabFormTitle": {
                "caption": "آزمایشات مورد نیاز محل"
              },
              "itemType": 5
            },
            {
              "nodes": null,
              "id": 25855,
              "title": {
                "caption": "لوازم حفاظتی مورد نیاز محل"
              },
              "moduleTitle": {
                "caption": "سازمان"
              },
              "menuTitle": {
                "caption": "اطلاعات سازمان/شرکت"
              },
              "formTitle": {
                "caption": "محل ها و مشخصات مربوطه"
              },
              "subMenuTitle": null,
              "tabFormTitle": {
                "caption": "لوازم حفاظتی مورد نیاز محل"
              },
              "itemType": 5
            }
          ],
          "id": 10727,
          "title": {
            "caption": "اطلاعات سازمان/شرکت"
          },
          "moduleTitle": {
            "caption": "سازمان"
          },
          "menuTitle": {
            "caption": "اطلاعات سازمان/شرکت"
          },
          "formTitle": null,
          "subMenuTitle": null,
          "tabFormTitle": null,
          "itemType": 2
        },
        {
          "nodes": [
            {
              "nodes": null,
              "id": 25754,
              "title": {
                "caption": "مشخصات پرسنل"
              },
              "moduleTitle": {
                "caption": "سازمان"
              },
              "menuTitle": {
                "caption": "مشخصات پرسنل"
              },
              "formTitle": {
                "caption": "مشخصات پرسنل"
              },
              "subMenuTitle": null,
              "tabFormTitle": null,
              "itemType": 4
            },
            {
              "nodes": null,
              "id": 25856,
              "title": {
                "caption": "اطلاعات شغل پرسنل"
              },
              "moduleTitle": {
                "caption": "سازمان"
              },
              "menuTitle": {
                "caption": "مشخصات پرسنل"
              },
              "formTitle": {
                "caption": "مشخصات پرسنل"
              },
              "subMenuTitle": null,
              "tabFormTitle": {
                "caption": "اطلاعات شغل پرسنل"
              },
              "itemType": 5
            },
            {
              "nodes": null,
              "id": 25857,
              "title": {
                "caption": "اطلاعات تکمیلی پرسنل"
              },
              "moduleTitle": {
                "caption": "سازمان"
              },
              "menuTitle": {
                "caption": "مشخصات پرسنل"
              },
              "formTitle": {
                "caption": "مشخصات پرسنل"
              },
              "subMenuTitle": null,
              "tabFormTitle": {
                "caption": "اطلاعات تکمیلی پرسنل"
              },
              "itemType": 5
            }
          ],
          "id": 10728,
          "title": {
            "caption": "مشخصات پرسنل"
          },
          "moduleTitle": {
            "caption": "سازمان"
          },
          "menuTitle": {
            "caption": "مشخصات پرسنل"
          },
          "formTitle": null,
          "subMenuTitle": null,
          "tabFormTitle": null,
          "itemType": 2
        }
      ],
      "id": 5340,
      "title": {
        "caption": "سازمان"
      },
      "moduleTitle": {
        "caption": "سازمان"
      },
      "menuTitle": null,
      "formTitle": null,
      "subMenuTitle": null,
      "tabFormTitle": null,
      "itemType": 1
    },
    {
      "nodes": [
        {
          "nodes": [
            {
              "nodes": null,
              "id": 25736,
              "title": {
                "caption": "پیمانکاران حقوقی"
              },
              "moduleTitle": {
                "caption": "پیمانکاران"
              },
              "menuTitle": {
                "caption": "پیمانکاران"
              },
              "formTitle": {
                "caption": "پیمانکاران حقوقی"
              },
              "subMenuTitle": null,
              "tabFormTitle": null,
              "itemType": 4
            },
            {
              "nodes": null,
              "id": 25737,
              "title": {
                "caption": "پیمانکاران حقیقی"
              },
              "moduleTitle": {
                "caption": "پیمانکاران"
              },
              "menuTitle": {
                "caption": "پیمانکاران"
              },
              "formTitle": {
                "caption": "پیمانکاران حقیقی"
              },
              "subMenuTitle": null,
              "tabFormTitle": null,
              "itemType": 4
            },
            {
              "nodes": null,
              "id": 25833,
              "title": {
                "caption": "قراردادهای پیمانکاران"
              },
              "moduleTitle": {
                "caption": "پیمانکاران"
              },
              "menuTitle": {
                "caption": "پیمانکاران"
              },
              "formTitle": {
                "caption": "پیمانکاران حقوقی"
              },
              "subMenuTitle": null,
              "tabFormTitle": {
                "caption": "قراردادهای پیمانکاران"
              },
              "itemType": 5
            },
            {
              "nodes": null,
              "id": 25834,
              "title": {
                "caption": "گواهینامه ها و رتبه های پیمانکاران"
              },
              "moduleTitle": {
                "caption": "پیمانکاران"
              },
              "menuTitle": {
                "caption": "پیمانکاران"
              },
              "formTitle": {
                "caption": "پیمانکاران حقوقی"
              },
              "subMenuTitle": null,
              "tabFormTitle": {
                "caption": "گواهینامه ها و رتبه های پیمانکاران"
              },
              "itemType": 5
            },
            {
              "nodes": null,
              "id": 25835,
              "title": {
                "caption": "پرسنل پیمانکار"
              },
              "moduleTitle": {
                "caption": "پیمانکاران"
              },
              "menuTitle": {
                "caption": "پیمانکاران"
              },
              "formTitle": {
                "caption": "پیمانکاران حقوقی"
              },
              "subMenuTitle": null,
              "tabFormTitle": {
                "caption": "پرسنل پیمانکار"
              },
              "itemType": 5
            },
            {
              "nodes": null,
              "id": 25836,
              "title": {
                "caption": "ماشین آلات پیمانکار"
              },
              "moduleTitle": {
                "caption": "پیمانکاران"
              },
              "menuTitle": {
                "caption": "پیمانکاران"
              },
              "formTitle": {
                "caption": "پیمانکاران حقوقی"
              },
              "subMenuTitle": null,
              "tabFormTitle": {
                "caption": "ماشین آلات پیمانکار"
              },
              "itemType": 5
            },
            {
              "nodes": null,
              "id": 25837,
              "title": {
                "caption": "اطلاعات تکمیلی پیمانکار"
              },
              "moduleTitle": {
                "caption": "پیمانکاران"
              },
              "menuTitle": {
                "caption": "پیمانکاران"
              },
              "formTitle": {
                "caption": "پیمانکاران حقوقی"
              },
              "subMenuTitle": null,
              "tabFormTitle": {
                "caption": "اطلاعات تکمیلی پیمانکار"
              },
              "itemType": 5
            },
            {
              "nodes": null,
              "id": 25838,
              "title": {
                "caption": "قراردادهای پیمانکار"
              },
              "moduleTitle": {
                "caption": "پیمانکاران"
              },
              "menuTitle": {
                "caption": "پیمانکاران"
              },
              "formTitle": {
                "caption": "پیمانکاران حقیقی"
              },
              "subMenuTitle": null,
              "tabFormTitle": {
                "caption": "قراردادهای پیمانکار"
              },
              "itemType": 5
            },
            {
              "nodes": null,
              "id": 25839,
              "title": {
                "caption": "گواهینامه ها و رتبه های پیمانکار"
              },
              "moduleTitle": {
                "caption": "پیمانکاران"
              },
              "menuTitle": {
                "caption": "پیمانکاران"
              },
              "formTitle": {
                "caption": "پیمانکاران حقیقی"
              },
              "subMenuTitle": null,
              "tabFormTitle": {
                "caption": "گواهینامه ها و رتبه های پیمانکار"
              },
              "itemType": 5
            },
            {
              "nodes": null,
              "id": 25840,
              "title": {
                "caption": "اطلاعات تکمیلی پیمانکار"
              },
              "moduleTitle": {
                "caption": "پیمانکاران"
              },
              "menuTitle": {
                "caption": "پیمانکاران"
              },
              "formTitle": {
                "caption": "پیمانکاران حقیقی"
              },
              "subMenuTitle": null,
              "tabFormTitle": {
                "caption": "اطلاعات تکمیلی پیمانکار"
              },
              "itemType": 5
            }
          ],
          "id": 10725,
          "title": {
            "caption": "پیمانکاران"
          },
          "moduleTitle": {
            "caption": "پیمانکاران"
          },
          "menuTitle": {
            "caption": "پیمانکاران"
          },
          "formTitle": null,
          "subMenuTitle": null,
          "tabFormTitle": null,
          "itemType": 2
        }
      ],
      "id": 5339,
      "title": {
        "caption": "پیمانکاران"
      },
      "moduleTitle": {
        "caption": "پیمانکاران"
      },
      "menuTitle": null,
      "formTitle": null,
      "subMenuTitle": null,
      "tabFormTitle": null,
      "itemType": 1
    },
    {
      "nodes": [
        {
          "nodes": [
            {
              "nodes": null,
              "id": 25778,
              "title": {
                "caption": "عنوان متعلقات"
              },
              "moduleTitle": {
                "caption": "ماشین الات و تجهیزات"
              },
              "menuTitle": {
                "caption": "اطلاعات پایه"
              },
              "formTitle": {
                "caption": "عنوان متعلقات"
              },
              "subMenuTitle": null,
              "tabFormTitle": null,
              "itemType": 4
            },
            {
              "nodes": null,
              "id": 25779,
              "title": {
                "caption": "گروه بندی"
              },
              "moduleTitle": {
                "caption": "ماشین الات و تجهیزات"
              },
              "menuTitle": {
                "caption": "اطلاعات پایه"
              },
              "formTitle": {
                "caption": "گروه بندی"
              },
              "subMenuTitle": null,
              "tabFormTitle": null,
              "itemType": 4
            },
            {
              "nodes": null,
              "id": 25780,
              "title": {
                "caption": "کاربری"
              },
              "moduleTitle": {
                "caption": "ماشین الات و تجهیزات"
              },
              "menuTitle": {
                "caption": "اطلاعات پایه"
              },
              "formTitle": {
                "caption": "کاربری"
              },
              "subMenuTitle": null,
              "tabFormTitle": null,
              "itemType": 4
            },
            {
              "nodes": null,
              "id": 25781,
              "title": {
                "caption": "مواد شارژ"
              },
              "moduleTitle": {
                "caption": "ماشین الات و تجهیزات"
              },
              "menuTitle": {
                "caption": "اطلاعات پایه"
              },
              "formTitle": {
                "caption": "مواد شارژ"
              },
              "subMenuTitle": null,
              "tabFormTitle": null,
              "itemType": 4
            },
            {
              "nodes": null,
              "id": 25782,
              "title": {
                "caption": "نوع تجهیزات"
              },
              "moduleTitle": {
                "caption": "ماشین الات و تجهیزات"
              },
              "menuTitle": {
                "caption": "اطلاعات پایه"
              },
              "formTitle": {
                "caption": "نوع تجهیزات"
              },
              "subMenuTitle": null,
              "tabFormTitle": null,
              "itemType": 4
            },
            {
              "nodes": null,
              "id": 25783,
              "title": {
                "caption": "نوع خودرو و ماشین آلات"
              },
              "moduleTitle": {
                "caption": "ماشین الات و تجهیزات"
              },
              "menuTitle": {
                "caption": "اطلاعات پایه"
              },
              "formTitle": {
                "caption": "نوع خودرو و ماشین آلات"
              },
              "subMenuTitle": null,
              "tabFormTitle": null,
              "itemType": 4
            }
          ],
          "id": 10738,
          "title": {
            "caption": "اطلاعات پایه"
          },
          "moduleTitle": {
            "caption": "ماشین الات و تجهیزات"
          },
          "menuTitle": {
            "caption": "اطلاعات پایه"
          },
          "formTitle": null,
          "subMenuTitle": null,
          "tabFormTitle": null,
          "itemType": 2
        },
        {
          "nodes": [
            {
              "nodes": null,
              "id": 25784,
              "title": {
                "caption": "خودرو و ماشین آلات"
              },
              "moduleTitle": {
                "caption": "ماشین الات و تجهیزات"
              },
              "menuTitle": {
                "caption": "ماشین آلات و تجهیزات"
              },
              "formTitle": {
                "caption": "خودرو و ماشین آلات"
              },
              "subMenuTitle": null,
              "tabFormTitle": null,
              "itemType": 4
            },
            {
              "nodes": null,
              "id": 25785,
              "title": {
                "caption": "رانندگان"
              },
              "moduleTitle": {
                "caption": "ماشین الات و تجهیزات"
              },
              "menuTitle": {
                "caption": "ماشین آلات و تجهیزات"
              },
              "formTitle": {
                "caption": "رانندگان"
              },
              "subMenuTitle": null,
              "tabFormTitle": null,
              "itemType": 4
            },
            {
              "nodes": null,
              "id": 25786,
              "title": {
                "caption": "تجهیزات"
              },
              "moduleTitle": {
                "caption": "ماشین الات و تجهیزات"
              },
              "menuTitle": {
                "caption": "ماشین آلات و تجهیزات"
              },
              "formTitle": {
                "caption": "تجهیزات"
              },
              "subMenuTitle": null,
              "tabFormTitle": null,
              "itemType": 4
            },
            {
              "nodes": null,
              "id": 25787,
              "title": {
                "caption": "شارژ تجهیزات"
              },
              "moduleTitle": {
                "caption": "ماشین الات و تجهیزات"
              },
              "menuTitle": {
                "caption": "ماشین آلات و تجهیزات"
              },
              "formTitle": {
                "caption": "شارژ تجهیزات"
              },
              "subMenuTitle": null,
              "tabFormTitle": null,
              "itemType": 4
            },
            {
              "nodes": null,
              "id": 25788,
              "title": {
                "caption": "وضعیت خودرو،تجهیزات"
              },
              "moduleTitle": {
                "caption": "ماشین الات و تجهیزات"
              },
              "menuTitle": {
                "caption": "ماشین آلات و تجهیزات"
              },
              "formTitle": {
                "caption": "وضعیت خودرو،تجهیزات"
              },
              "subMenuTitle": null,
              "tabFormTitle": null,
              "itemType": 4
            },
            {
              "nodes": null,
              "id": 25789,
              "title": {
                "caption": "تحویل و انتقال"
              },
              "moduleTitle": {
                "caption": "ماشین الات و تجهیزات"
              },
              "menuTitle": {
                "caption": "ماشین آلات و تجهیزات"
              },
              "formTitle": {
                "caption": "تحویل و انتقال"
              },
              "subMenuTitle": null,
              "tabFormTitle": null,
              "itemType": 4
            },
            {
              "nodes": null,
              "id": 25790,
              "title": {
                "caption": "گواهینامه ها"
              },
              "moduleTitle": {
                "caption": "ماشین الات و تجهیزات"
              },
              "menuTitle": {
                "caption": "ماشین آلات و تجهیزات"
              },
              "formTitle": {
                "caption": "گواهینامه ها"
              },
              "subMenuTitle": null,
              "tabFormTitle": null,
              "itemType": 4
            },
            {
              "nodes": null,
              "id": 25869,
              "title": {
                "caption": "اطلاعات بیمه"
              },
              "moduleTitle": {
                "caption": "ماشین الات و تجهیزات"
              },
              "menuTitle": {
                "caption": "ماشین آلات و تجهیزات"
              },
              "formTitle": {
                "caption": "خودرو و ماشین آلات"
              },
              "subMenuTitle": null,
              "tabFormTitle": {
                "caption": "اطلاعات بیمه"
              },
              "itemType": 5
            },
            {
              "nodes": null,
              "id": 25870,
              "title": {
                "caption": "رانندگان"
              },
              "moduleTitle": {
                "caption": "ماشین الات و تجهیزات"
              },
              "menuTitle": {
                "caption": "ماشین آلات و تجهیزات"
              },
              "formTitle": {
                "caption": "خودرو و ماشین آلات"
              },
              "subMenuTitle": null,
              "tabFormTitle": {
                "caption": "رانندگان"
              },
              "itemType": 5
            },
            {
              "nodes": null,
              "id": 25871,
              "title": {
                "caption": "فایل ها"
              },
              "moduleTitle": {
                "caption": "ماشین الات و تجهیزات"
              },
              "menuTitle": {
                "caption": "ماشین آلات و تجهیزات"
              },
              "formTitle": {
                "caption": "خودرو و ماشین آلات"
              },
              "subMenuTitle": null,
              "tabFormTitle": {
                "caption": "فایل ها"
              },
              "itemType": 5
            },
            {
              "nodes": null,
              "id": 25872,
              "title": {
                "caption": "اطلاعات تکمیلی"
              },
              "moduleTitle": {
                "caption": "ماشین الات و تجهیزات"
              },
              "menuTitle": {
                "caption": "ماشین آلات و تجهیزات"
              },
              "formTitle": {
                "caption": "خودرو و ماشین آلات"
              },
              "subMenuTitle": null,
              "tabFormTitle": {
                "caption": "اطلاعات تکمیلی"
              },
              "itemType": 5
            },
            {
              "nodes": null,
              "id": 25873,
              "title": {
                "caption": "فایل ها"
              },
              "moduleTitle": {
                "caption": "ماشین الات و تجهیزات"
              },
              "menuTitle": {
                "caption": "ماشین آلات و تجهیزات"
              },
              "formTitle": {
                "caption": "تجهیزات"
              },
              "subMenuTitle": null,
              "tabFormTitle": {
                "caption": "فایل ها"
              },
              "itemType": 5
            }
          ],
          "id": 10739,
          "title": {
            "caption": "ماشین آلات و تجهیزات"
          },
          "moduleTitle": {
            "caption": "ماشین الات و تجهیزات"
          },
          "menuTitle": {
            "caption": "ماشین آلات و تجهیزات"
          },
          "formTitle": null,
          "subMenuTitle": null,
          "tabFormTitle": null,
          "itemType": 2
        },
        {
          "nodes": [],
          "id": 10740,
          "title": {
            "caption": "گزارشات"
          },
          "moduleTitle": {
            "caption": "ماشین الات و تجهیزات"
          },
          "menuTitle": {
            "caption": "گزارشات"
          },
          "formTitle": null,
          "subMenuTitle": null,
          "tabFormTitle": null,
          "itemType": 2
        }
      ],
      "id": 5345,
      "title": {
        "caption": "ماشین الات و تجهیزات"
      },
      "moduleTitle": {
        "caption": "ماشین الات و تجهیزات"
      },
      "menuTitle": null,
      "formTitle": null,
      "subMenuTitle": null,
      "tabFormTitle": null,
      "itemType": 1
    },
    {
      "nodes": [
        {
          "nodes": [
            {
              "nodes": null,
              "id": 25735,
              "title": {
                "caption": "گروه آلودگی"
              },
              "moduleTitle": {
                "caption": "سلامت"
              },
              "menuTitle": {
                "caption": "اطلاعات پایه"
              },
              "formTitle": {
                "caption": "گروه آلودگی"
              },
              "subMenuTitle": null,
              "tabFormTitle": null,
              "itemType": 4
            }
          ],
          "id": 10724,
          "title": {
            "caption": "اطلاعات پایه"
          },
          "moduleTitle": {
            "caption": "سلامت"
          },
          "menuTitle": {
            "caption": "اطلاعات پایه"
          },
          "formTitle": null,
          "subMenuTitle": null,
          "tabFormTitle": null,
          "itemType": 2
        }
      ],
      "id": 5338,
      "title": {
        "caption": "سلامت"
      },
      "moduleTitle": {
        "caption": "سلامت"
      },
      "menuTitle": null,
      "formTitle": null,
      "subMenuTitle": null,
      "tabFormTitle": null,
      "itemType": 1
    },
    {
      "nodes": [
        {
          "nodes": [],
          "id": 10741,
          "title": {
            "caption": "اطلاعات پایه"
          },
          "moduleTitle": {
            "caption": "آتش نشانی"
          },
          "menuTitle": {
            "caption": "اطلاعات پایه"
          },
          "formTitle": null,
          "subMenuTitle": null,
          "tabFormTitle": null,
          "itemType": 2
        },
        {
          "nodes": [
            {
              "nodes": null,
              "id": 25791,
              "title": {
                "caption": "تعریف شیفت"
              },
              "moduleTitle": {
                "caption": "آتش نشانی"
              },
              "menuTitle": {
                "caption": "گزارش شیفت"
              },
              "formTitle": {
                "caption": "تعریف شیفت"
              },
              "subMenuTitle": null,
              "tabFormTitle": null,
              "itemType": 4
            },
            {
              "nodes": null,
              "id": 25792,
              "title": {
                "caption": "تقویم آتش نشانی"
              },
              "moduleTitle": {
                "caption": "آتش نشانی"
              },
              "menuTitle": {
                "caption": "گزارش شیفت"
              },
              "formTitle": {
                "caption": "تقویم آتش نشانی"
              },
              "subMenuTitle": null,
              "tabFormTitle": null,
              "itemType": 4
            },
            {
              "nodes": null,
              "id": 25793,
              "title": {
                "caption": "گزارش روزانه"
              },
              "moduleTitle": {
                "caption": "آتش نشانی"
              },
              "menuTitle": {
                "caption": "گزارش شیفت"
              },
              "formTitle": {
                "caption": "گزارش روزانه"
              },
              "subMenuTitle": null,
              "tabFormTitle": null,
              "itemType": 4
            }
          ],
          "id": 10742,
          "title": {
            "caption": "گزارش شیفت"
          },
          "moduleTitle": {
            "caption": "آتش نشانی"
          },
          "menuTitle": {
            "caption": "گزارش شیفت"
          },
          "formTitle": null,
          "subMenuTitle": null,
          "tabFormTitle": null,
          "itemType": 2
        },
        {
          "nodes": [
            {
              "nodes": null,
              "id": 25794,
              "title": {
                "caption": "دوره آزمون آتش نشانی"
              },
              "moduleTitle": {
                "caption": "آتش نشانی"
              },
              "menuTitle": {
                "caption": "آزمون آتش نشانی"
              },
              "formTitle": {
                "caption": "دوره آزمون آتش نشانی"
              },
              "subMenuTitle": null,
              "tabFormTitle": null,
              "itemType": 4
            },
            {
              "nodes": null,
              "id": 25795,
              "title": {
                "caption": "لیست آزمون های آتش نشانی"
              },
              "moduleTitle": {
                "caption": "آتش نشانی"
              },
              "menuTitle": {
                "caption": "آزمون آتش نشانی"
              },
              "formTitle": {
                "caption": "لیست آزمون های آتش نشانی"
              },
              "subMenuTitle": null,
              "tabFormTitle": null,
              "itemType": 4
            }
          ],
          "id": 10743,
          "title": {
            "caption": "آزمون آتش نشانی"
          },
          "moduleTitle": {
            "caption": "آتش نشانی"
          },
          "menuTitle": {
            "caption": "آزمون آتش نشانی"
          },
          "formTitle": null,
          "subMenuTitle": null,
          "tabFormTitle": null,
          "itemType": 2
        },
        {
          "nodes": [],
          "id": 10744,
          "title": {
            "caption": "گزارشات"
          },
          "moduleTitle": {
            "caption": "آتش نشانی"
          },
          "menuTitle": {
            "caption": "گزارشات"
          },
          "formTitle": null,
          "subMenuTitle": null,
          "tabFormTitle": null,
          "itemType": 2
        },
        {
          "nodes": [
            {
              "nodes": null,
              "id": 25874,
              "title": {
                "caption": "فعالیت آتش نشانی"
              },
              "moduleTitle": {
                "caption": "آتش نشانی"
              },
              "menuTitle": {
                "caption": "گزارش روزانه آتش نشانی"
              },
              "formTitle": {
                "caption": "فعالیت آتش نشانی"
              },
              "subMenuTitle": null,
              "tabFormTitle": null,
              "itemType": 4
            },
            {
              "nodes": null,
              "id": 25875,
              "title": {
                "caption": "پارامترهای مورد سنجش"
              },
              "moduleTitle": {
                "caption": "آتش نشانی"
              },
              "menuTitle": {
                "caption": "گزارش روزانه آتش نشانی"
              },
              "formTitle": {
                "caption": "پارامترهای مورد سنجش"
              },
              "subMenuTitle": null,
              "tabFormTitle": null,
              "itemType": 4
            }
          ],
          "id": 10763,
          "title": {
            "caption": "گزارش روزانه آتش نشانی"
          },
          "moduleTitle": {
            "caption": "آتش نشانی"
          },
          "menuTitle": {
            "caption": "گزارش روزانه آتش نشانی"
          },
          "formTitle": null,
          "subMenuTitle": null,
          "tabFormTitle": null,
          "itemType": 3
        },
        {
          "nodes": [
            {
              "nodes": null,
              "id": 25876,
              "title": {
                "caption": "آیتم های آزمون"
              },
              "moduleTitle": {
                "caption": "آتش نشانی"
              },
              "menuTitle": {
                "caption": "آزمون آتش نشانی"
              },
              "formTitle": {
                "caption": "آیتم های آزمون"
              },
              "subMenuTitle": null,
              "tabFormTitle": null,
              "itemType": 4
            },
            {
              "nodes": null,
              "id": 25877,
              "title": {
                "caption": "تنظیم امتیاز آزمون آمادگی جسمانی"
              },
              "moduleTitle": {
                "caption": "آتش نشانی"
              },
              "menuTitle": {
                "caption": "آزمون آتش نشانی"
              },
              "formTitle": {
                "caption": "تنظیم امتیاز آزمون آمادگی جسمانی"
              },
              "subMenuTitle": null,
              "tabFormTitle": null,
              "itemType": 4
            }
          ],
          "id": 10764,
          "title": {
            "caption": "آزمون آتش نشانی"
          },
          "moduleTitle": {
            "caption": "آتش نشانی"
          },
          "menuTitle": {
            "caption": "آزمون آتش نشانی"
          },
          "formTitle": null,
          "subMenuTitle": null,
          "tabFormTitle": null,
          "itemType": 3
        }
      ],
      "id": 5346,
      "title": {
        "caption": "آتش نشانی"
      },
      "moduleTitle": {
        "caption": "آتش نشانی"
      },
      "menuTitle": null,
      "formTitle": null,
      "subMenuTitle": null,
      "tabFormTitle": null,
      "itemType": 1
    },
    {
      "nodes": [
        {
          "nodes": [
            {
              "nodes": null,
              "id": 25796,
              "title": {
                "caption": "گروه دوره های آموزشی"
              },
              "moduleTitle": {
                "caption": "آموزش"
              },
              "menuTitle": {
                "caption": "اطلاعات پایه"
              },
              "formTitle": {
                "caption": "گروه دوره های آموزشی"
              },
              "subMenuTitle": null,
              "tabFormTitle": null,
              "itemType": 4
            },
            {
              "nodes": null,
              "id": 25797,
              "title": {
                "caption": "دوره های آموزشی"
              },
              "moduleTitle": {
                "caption": "آموزش"
              },
              "menuTitle": {
                "caption": "اطلاعات پایه"
              },
              "formTitle": {
                "caption": "دوره های آموزشی"
              },
              "subMenuTitle": null,
              "tabFormTitle": null,
              "itemType": 4
            },
            {
              "nodes": null,
              "id": 25798,
              "title": {
                "caption": "اثربخشی دوره های آموزشی"
              },
              "moduleTitle": {
                "caption": "آموزش"
              },
              "menuTitle": {
                "caption": "اطلاعات پایه"
              },
              "formTitle": {
                "caption": "اثربخشی دوره های آموزشی"
              },
              "subMenuTitle": null,
              "tabFormTitle": null,
              "itemType": 4
            }
          ],
          "id": 10745,
          "title": {
            "caption": "اطلاعات پایه"
          },
          "moduleTitle": {
            "caption": "آموزش"
          },
          "menuTitle": {
            "caption": "اطلاعات پایه"
          },
          "formTitle": null,
          "subMenuTitle": null,
          "tabFormTitle": null,
          "itemType": 2
        },
        {
          "nodes": [
            {
              "nodes": null,
              "id": 25799,
              "title": {
                "caption": "سوابق آموزشی قبل از استخدام"
              },
              "moduleTitle": {
                "caption": "آموزش"
              },
              "menuTitle": {
                "caption": "آموزش"
              },
              "formTitle": {
                "caption": "سوابق آموزشی قبل از استخدام"
              },
              "subMenuTitle": null,
              "tabFormTitle": null,
              "itemType": 4
            },
            {
              "nodes": null,
              "id": 25800,
              "title": {
                "caption": "دوره های آموزشی برگزار شده"
              },
              "moduleTitle": {
                "caption": "آموزش"
              },
              "menuTitle": {
                "caption": "آموزش"
              },
              "formTitle": {
                "caption": "دوره های آموزشی برگزار شده"
              },
              "subMenuTitle": null,
              "tabFormTitle": null,
              "itemType": 4
            },
            {
              "nodes": null,
              "id": 25801,
              "title": {
                "caption": "اثربخشی دوره های آموزشی"
              },
              "moduleTitle": {
                "caption": "آموزش"
              },
              "menuTitle": {
                "caption": "آموزش"
              },
              "formTitle": {
                "caption": "اثربخشی دوره های آموزشی"
              },
              "subMenuTitle": null,
              "tabFormTitle": null,
              "itemType": 4
            }
          ],
          "id": 10746,
          "title": {
            "caption": "آموزش"
          },
          "moduleTitle": {
            "caption": "آموزش"
          },
          "menuTitle": {
            "caption": "آموزش"
          },
          "formTitle": null,
          "subMenuTitle": null,
          "tabFormTitle": null,
          "itemType": 2
        }
      ],
      "id": 5347,
      "title": {
        "caption": "آموزش"
      },
      "moduleTitle": {
        "caption": "آموزش"
      },
      "menuTitle": null,
      "formTitle": null,
      "subMenuTitle": null,
      "tabFormTitle": null,
      "itemType": 1
    },
    {
      "nodes": [
        {
          "nodes": [
            {
              "nodes": null,
              "id": 25802,
              "title": {
                "caption": "گروه ریسک"
              },
              "moduleTitle": {
                "caption": "ارزیابی ریسک"
              },
              "menuTitle": {
                "caption": "اطلاعات پایه"
              },
              "formTitle": {
                "caption": "گروه ریسک"
              },
              "subMenuTitle": null,
              "tabFormTitle": null,
              "itemType": 4
            },
            {
              "nodes": null,
              "id": 25803,
              "title": {
                "caption": "ارزیابی دوره ای ریسک"
              },
              "moduleTitle": {
                "caption": "ارزیابی ریسک"
              },
              "menuTitle": {
                "caption": "اطلاعات پایه"
              },
              "formTitle": {
                "caption": "ارزیابی دوره ای ریسک"
              },
              "subMenuTitle": null,
              "tabFormTitle": null,
              "itemType": 4
            }
          ],
          "id": 10747,
          "title": {
            "caption": "اطلاعات پایه"
          },
          "moduleTitle": {
            "caption": "ارزیابی ریسک"
          },
          "menuTitle": {
            "caption": "اطلاعات پایه"
          },
          "formTitle": null,
          "subMenuTitle": null,
          "tabFormTitle": null,
          "itemType": 2
        },
        {
          "nodes": [
            {
              "nodes": null,
              "id": 25804,
              "title": {
                "caption": "خطر"
              },
              "moduleTitle": {
                "caption": "ارزیابی ریسک"
              },
              "menuTitle": {
                "caption": "مدیریت ریسک"
              },
              "formTitle": {
                "caption": "خطر"
              },
              "subMenuTitle": null,
              "tabFormTitle": null,
              "itemType": 4
            },
            {
              "nodes": null,
              "id": 25805,
              "title": {
                "caption": "شناسایی خطر و ارزیابی ریسک"
              },
              "moduleTitle": {
                "caption": "ارزیابی ریسک"
              },
              "menuTitle": {
                "caption": "مدیریت ریسک"
              },
              "formTitle": {
                "caption": "شناسایی خطر و ارزیابی ریسک"
              },
              "subMenuTitle": null,
              "tabFormTitle": null,
              "itemType": 4
            }
          ],
          "id": 10748,
          "title": {
            "caption": "مدیریت ریسک"
          },
          "moduleTitle": {
            "caption": "ارزیابی ریسک"
          },
          "menuTitle": {
            "caption": "مدیریت ریسک"
          },
          "formTitle": null,
          "subMenuTitle": null,
          "tabFormTitle": null,
          "itemType": 2
        }
      ],
      "id": 5348,
      "title": {
        "caption": "ارزیابی ریسک"
      },
      "moduleTitle": {
        "caption": "ارزیابی ریسک"
      },
      "menuTitle": null,
      "formTitle": null,
      "subMenuTitle": null,
      "tabFormTitle": null,
      "itemType": 1
    },
    {
      "nodes": [
        {
          "nodes": [
            {
              "nodes": null,
              "id": 25806,
              "title": {
                "caption": "علل رویداد"
              },
              "moduleTitle": {
                "caption": null
              },
              "menuTitle": {
                "caption": "اطلاعات پایه"
              },
              "formTitle": {
                "caption": "علل رویداد"
              },
              "subMenuTitle": null,
              "tabFormTitle": null,
              "itemType": 4
            },
            {
              "nodes": null,
              "id": 25807,
              "title": {
                "caption": "انواع رویداد"
              },
              "moduleTitle": {
                "caption": null
              },
              "menuTitle": {
                "caption": "اطلاعات پایه"
              },
              "formTitle": {
                "caption": "انواع رویداد"
              },
              "subMenuTitle": null,
              "tabFormTitle": null,
              "itemType": 4
            },
            {
              "nodes": null,
              "id": 25808,
              "title": {
                "caption": "سطوح رویداد"
              },
              "moduleTitle": {
                "caption": null
              },
              "menuTitle": {
                "caption": "اطلاعات پایه"
              },
              "formTitle": {
                "caption": "سطوح رویداد"
              },
              "subMenuTitle": null,
              "tabFormTitle": null,
              "itemType": 4
            },
            {
              "nodes": null,
              "id": 25809,
              "title": {
                "caption": "پیامدهای رویداد"
              },
              "moduleTitle": {
                "caption": null
              },
              "menuTitle": {
                "caption": "اطلاعات پایه"
              },
              "formTitle": {
                "caption": "پیامدهای رویداد"
              },
              "subMenuTitle": null,
              "tabFormTitle": null,
              "itemType": 4
            },
            {
              "nodes": null,
              "id": 25810,
              "title": {
                "caption": "روزهای کاری از دست رفته"
              },
              "moduleTitle": {
                "caption": null
              },
              "menuTitle": {
                "caption": "اطلاعات پایه"
              },
              "formTitle": {
                "caption": "روزهای کاری از دست رفته"
              },
              "subMenuTitle": null,
              "tabFormTitle": null,
              "itemType": 4
            },
            {
              "nodes": null,
              "id": 25811,
              "title": {
                "caption": "اقدامات درمانی حادثه دیده"
              },
              "moduleTitle": {
                "caption": null
              },
              "menuTitle": {
                "caption": "اطلاعات پایه"
              },
              "formTitle": {
                "caption": "اقدامات درمانی حادثه دیده"
              },
              "subMenuTitle": null,
              "tabFormTitle": null,
              "itemType": 4
            }
          ],
          "id": 10749,
          "title": {
            "caption": "اطلاعات پایه"
          },
          "moduleTitle": {
            "caption": null
          },
          "menuTitle": {
            "caption": "اطلاعات پایه"
          },
          "formTitle": null,
          "subMenuTitle": null,
          "tabFormTitle": null,
          "itemType": 2
        },
        {
          "nodes": [
            {
              "nodes": null,
              "id": 25812,
              "title": {
                "caption": "حادثه"
              },
              "moduleTitle": {
                "caption": null
              },
              "menuTitle": {
                "caption": "ثبت رویداد"
              },
              "formTitle": {
                "caption": "حادثه"
              },
              "subMenuTitle": null,
              "tabFormTitle": null,
              "itemType": 4
            },
            {
              "nodes": null,
              "id": 25813,
              "title": {
                "caption": "شبه حادثه"
              },
              "moduleTitle": {
                "caption": null
              },
              "menuTitle": {
                "caption": "ثبت رویداد"
              },
              "formTitle": {
                "caption": "شبه حادثه"
              },
              "subMenuTitle": null,
              "tabFormTitle": null,
              "itemType": 4
            }
          ],
          "id": 10750,
          "title": {
            "caption": "ثبت رویداد"
          },
          "moduleTitle": {
            "caption": null
          },
          "menuTitle": {
            "caption": "ثبت رویداد"
          },
          "formTitle": null,
          "subMenuTitle": null,
          "tabFormTitle": null,
          "itemType": 2
        },
        {
          "nodes": [],
          "id": 10751,
          "title": {
            "caption": "گزارشات"
          },
          "moduleTitle": {
            "caption": null
          },
          "menuTitle": {
            "caption": "گزارشات"
          },
          "formTitle": null,
          "subMenuTitle": null,
          "tabFormTitle": null,
          "itemType": 2
        }
      ],
      "id": 5349,
      "title": {
        "caption": null
      },
      "moduleTitle": {
        "caption": null
      },
      "menuTitle": null,
      "formTitle": null,
      "subMenuTitle": null,
      "tabFormTitle": null,
      "itemType": 1
    },
    {
      "nodes": [
        {
          "nodes": [
            {
              "nodes": null,
              "id": 25878,
              "title": {
                "caption": "علل رویداد"
              },
              "moduleTitle": {
                "caption": null
              },
              "menuTitle": {
                "caption": "اطلاعات پایه"
              },
              "formTitle": {
                "caption": "علل رویداد"
              },
              "subMenuTitle": null,
              "tabFormTitle": null,
              "itemType": 4
            },
            {
              "nodes": null,
              "id": 25879,
              "title": {
                "caption": "انواع رویداد"
              },
              "moduleTitle": {
                "caption": null
              },
              "menuTitle": {
                "caption": "اطلاعات پایه"
              },
              "formTitle": {
                "caption": "انواع رویداد"
              },
              "subMenuTitle": null,
              "tabFormTitle": null,
              "itemType": 4
            },
            {
              "nodes": null,
              "id": 25880,
              "title": {
                "caption": "سطوح رویداد"
              },
              "moduleTitle": {
                "caption": null
              },
              "menuTitle": {
                "caption": "اطلاعات پایه"
              },
              "formTitle": {
                "caption": "سطوح رویداد"
              },
              "subMenuTitle": null,
              "tabFormTitle": null,
              "itemType": 4
            },
            {
              "nodes": null,
              "id": 25881,
              "title": {
                "caption": "پیامدهای رویداد"
              },
              "moduleTitle": {
                "caption": null
              },
              "menuTitle": {
                "caption": "اطلاعات پایه"
              },
              "formTitle": {
                "caption": "پیامدهای رویداد"
              },
              "subMenuTitle": null,
              "tabFormTitle": null,
              "itemType": 4
            },
            {
              "nodes": null,
              "id": 25882,
              "title": {
                "caption": "روزهای کاری از دست رفته"
              },
              "moduleTitle": {
                "caption": null
              },
              "menuTitle": {
                "caption": "اطلاعات پایه"
              },
              "formTitle": {
                "caption": "روزهای کاری از دست رفته"
              },
              "subMenuTitle": null,
              "tabFormTitle": null,
              "itemType": 4
            },
            {
              "nodes": null,
              "id": 25883,
              "title": {
                "caption": "اقدامات درمانی حادثه دیده"
              },
              "moduleTitle": {
                "caption": null
              },
              "menuTitle": {
                "caption": "اطلاعات پایه"
              },
              "formTitle": {
                "caption": "اقدامات درمانی حادثه دیده"
              },
              "subMenuTitle": null,
              "tabFormTitle": null,
              "itemType": 4
            }
          ],
          "id": 10765,
          "title": {
            "caption": "اطلاعات پایه"
          },
          "moduleTitle": {
            "caption": null
          },
          "menuTitle": {
            "caption": "اطلاعات پایه"
          },
          "formTitle": null,
          "subMenuTitle": null,
          "tabFormTitle": null,
          "itemType": 2
        },
        {
          "nodes": [
            {
              "nodes": null,
              "id": 25884,
              "title": {
                "caption": "حادثه"
              },
              "moduleTitle": {
                "caption": null
              },
              "menuTitle": {
                "caption": "ثبت رویداد"
              },
              "formTitle": {
                "caption": "حادثه"
              },
              "subMenuTitle": null,
              "tabFormTitle": null,
              "itemType": 4
            },
            {
              "nodes": null,
              "id": 25885,
              "title": {
                "caption": "شبه حادثه"
              },
              "moduleTitle": {
                "caption": null
              },
              "menuTitle": {
                "caption": "ثبت رویداد"
              },
              "formTitle": {
                "caption": "شبه حادثه"
              },
              "subMenuTitle": null,
              "tabFormTitle": null,
              "itemType": 4
            }
          ],
          "id": 10766,
          "title": {
            "caption": "ثبت رویداد"
          },
          "moduleTitle": {
            "caption": null
          },
          "menuTitle": {
            "caption": "ثبت رویداد"
          },
          "formTitle": null,
          "subMenuTitle": null,
          "tabFormTitle": null,
          "itemType": 2
        },
        {
          "nodes": [],
          "id": 10767,
          "title": {
            "caption": "گزارشات"
          },
          "moduleTitle": {
            "caption": null
          },
          "menuTitle": {
            "caption": "گزارشات"
          },
          "formTitle": null,
          "subMenuTitle": null,
          "tabFormTitle": null,
          "itemType": 2
        }
      ],
      "id": 5353,
      "title": {
        "caption": null
      },
      "moduleTitle": {
        "caption": null
      },
      "menuTitle": null,
      "formTitle": null,
      "subMenuTitle": null,
      "tabFormTitle": null,
      "itemType": 1
    },
    {
      "nodes": [
        {
          "nodes": [
            {
              "nodes": null,
              "id": 25886,
              "title": {
                "caption": "علل رویداد"
              },
              "moduleTitle": {
                "caption": null
              },
              "menuTitle": {
                "caption": "اطلاعات پایه"
              },
              "formTitle": {
                "caption": "علل رویداد"
              },
              "subMenuTitle": null,
              "tabFormTitle": null,
              "itemType": 4
            },
            {
              "nodes": null,
              "id": 25887,
              "title": {
                "caption": "انواع رویداد"
              },
              "moduleTitle": {
                "caption": null
              },
              "menuTitle": {
                "caption": "اطلاعات پایه"
              },
              "formTitle": {
                "caption": "انواع رویداد"
              },
              "subMenuTitle": null,
              "tabFormTitle": null,
              "itemType": 4
            },
            {
              "nodes": null,
              "id": 25888,
              "title": {
                "caption": "سطوح رویداد"
              },
              "moduleTitle": {
                "caption": null
              },
              "menuTitle": {
                "caption": "اطلاعات پایه"
              },
              "formTitle": {
                "caption": "سطوح رویداد"
              },
              "subMenuTitle": null,
              "tabFormTitle": null,
              "itemType": 4
            },
            {
              "nodes": null,
              "id": 25889,
              "title": {
                "caption": "پیامدهای رویداد"
              },
              "moduleTitle": {
                "caption": null
              },
              "menuTitle": {
                "caption": "اطلاعات پایه"
              },
              "formTitle": {
                "caption": "پیامدهای رویداد"
              },
              "subMenuTitle": null,
              "tabFormTitle": null,
              "itemType": 4
            },
            {
              "nodes": null,
              "id": 25890,
              "title": {
                "caption": "روزهای کاری از دست رفته"
              },
              "moduleTitle": {
                "caption": null
              },
              "menuTitle": {
                "caption": "اطلاعات پایه"
              },
              "formTitle": {
                "caption": "روزهای کاری از دست رفته"
              },
              "subMenuTitle": null,
              "tabFormTitle": null,
              "itemType": 4
            },
            {
              "nodes": null,
              "id": 25891,
              "title": {
                "caption": "اقدامات درمانی حادثه دیده"
              },
              "moduleTitle": {
                "caption": null
              },
              "menuTitle": {
                "caption": "اطلاعات پایه"
              },
              "formTitle": {
                "caption": "اقدامات درمانی حادثه دیده"
              },
              "subMenuTitle": null,
              "tabFormTitle": null,
              "itemType": 4
            }
          ],
          "id": 10768,
          "title": {
            "caption": "اطلاعات پایه"
          },
          "moduleTitle": {
            "caption": null
          },
          "menuTitle": {
            "caption": "اطلاعات پایه"
          },
          "formTitle": null,
          "subMenuTitle": null,
          "tabFormTitle": null,
          "itemType": 2
        },
        {
          "nodes": [
            {
              "nodes": null,
              "id": 25892,
              "title": {
                "caption": "حادثه"
              },
              "moduleTitle": {
                "caption": null
              },
              "menuTitle": {
                "caption": "ثبت رویداد"
              },
              "formTitle": {
                "caption": "حادثه"
              },
              "subMenuTitle": null,
              "tabFormTitle": null,
              "itemType": 4
            },
            {
              "nodes": null,
              "id": 25893,
              "title": {
                "caption": "شبه حادثه"
              },
              "moduleTitle": {
                "caption": null
              },
              "menuTitle": {
                "caption": "ثبت رویداد"
              },
              "formTitle": {
                "caption": "شبه حادثه"
              },
              "subMenuTitle": null,
              "tabFormTitle": null,
              "itemType": 4
            }
          ],
          "id": 10769,
          "title": {
            "caption": "ثبت رویداد"
          },
          "moduleTitle": {
            "caption": null
          },
          "menuTitle": {
            "caption": "ثبت رویداد"
          },
          "formTitle": null,
          "subMenuTitle": null,
          "tabFormTitle": null,
          "itemType": 2
        },
        {
          "nodes": [],
          "id": 10770,
          "title": {
            "caption": "گزارشات"
          },
          "moduleTitle": {
            "caption": null
          },
          "menuTitle": {
            "caption": "گزارشات"
          },
          "formTitle": null,
          "subMenuTitle": null,
          "tabFormTitle": null,
          "itemType": 2
        }
      ],
      "id": 5354,
      "title": {
        "caption": null
      },
      "moduleTitle": {
        "caption": null
      },
      "menuTitle": null,
      "formTitle": null,
      "subMenuTitle": null,
      "tabFormTitle": null,
      "itemType": 1
    },
    {
      "nodes": [
        {
          "nodes": [
            {
              "nodes": null,
              "id": 25894,
              "title": {
                "caption": "علل رویداد"
              },
              "moduleTitle": {
                "caption": null
              },
              "menuTitle": {
                "caption": "اطلاعات پایه"
              },
              "formTitle": {
                "caption": "علل رویداد"
              },
              "subMenuTitle": null,
              "tabFormTitle": null,
              "itemType": 4
            },
            {
              "nodes": null,
              "id": 25895,
              "title": {
                "caption": "انواع رویداد"
              },
              "moduleTitle": {
                "caption": null
              },
              "menuTitle": {
                "caption": "اطلاعات پایه"
              },
              "formTitle": {
                "caption": "انواع رویداد"
              },
              "subMenuTitle": null,
              "tabFormTitle": null,
              "itemType": 4
            },
            {
              "nodes": null,
              "id": 25896,
              "title": {
                "caption": "سطوح رویداد"
              },
              "moduleTitle": {
                "caption": null
              },
              "menuTitle": {
                "caption": "اطلاعات پایه"
              },
              "formTitle": {
                "caption": "سطوح رویداد"
              },
              "subMenuTitle": null,
              "tabFormTitle": null,
              "itemType": 4
            },
            {
              "nodes": null,
              "id": 25897,
              "title": {
                "caption": "پیامدهای رویداد"
              },
              "moduleTitle": {
                "caption": null
              },
              "menuTitle": {
                "caption": "اطلاعات پایه"
              },
              "formTitle": {
                "caption": "پیامدهای رویداد"
              },
              "subMenuTitle": null,
              "tabFormTitle": null,
              "itemType": 4
            },
            {
              "nodes": null,
              "id": 25898,
              "title": {
                "caption": "روزهای کاری از دست رفته"
              },
              "moduleTitle": {
                "caption": null
              },
              "menuTitle": {
                "caption": "اطلاعات پایه"
              },
              "formTitle": {
                "caption": "روزهای کاری از دست رفته"
              },
              "subMenuTitle": null,
              "tabFormTitle": null,
              "itemType": 4
            },
            {
              "nodes": null,
              "id": 25899,
              "title": {
                "caption": "اقدامات درمانی حادثه دیده"
              },
              "moduleTitle": {
                "caption": null
              },
              "menuTitle": {
                "caption": "اطلاعات پایه"
              },
              "formTitle": {
                "caption": "اقدامات درمانی حادثه دیده"
              },
              "subMenuTitle": null,
              "tabFormTitle": null,
              "itemType": 4
            }
          ],
          "id": 10771,
          "title": {
            "caption": "اطلاعات پایه"
          },
          "moduleTitle": {
            "caption": null
          },
          "menuTitle": {
            "caption": "اطلاعات پایه"
          },
          "formTitle": null,
          "subMenuTitle": null,
          "tabFormTitle": null,
          "itemType": 2
        },
        {
          "nodes": [
            {
              "nodes": null,
              "id": 25900,
              "title": {
                "caption": "حادثه"
              },
              "moduleTitle": {
                "caption": null
              },
              "menuTitle": {
                "caption": "ثبت رویداد"
              },
              "formTitle": {
                "caption": "حادثه"
              },
              "subMenuTitle": null,
              "tabFormTitle": null,
              "itemType": 4
            },
            {
              "nodes": null,
              "id": 25901,
              "title": {
                "caption": "شبه حادثه"
              },
              "moduleTitle": {
                "caption": null
              },
              "menuTitle": {
                "caption": "ثبت رویداد"
              },
              "formTitle": {
                "caption": "شبه حادثه"
              },
              "subMenuTitle": null,
              "tabFormTitle": null,
              "itemType": 4
            }
          ],
          "id": 10772,
          "title": {
            "caption": "ثبت رویداد"
          },
          "moduleTitle": {
            "caption": null
          },
          "menuTitle": {
            "caption": "ثبت رویداد"
          },
          "formTitle": null,
          "subMenuTitle": null,
          "tabFormTitle": null,
          "itemType": 2
        },
        {
          "nodes": [],
          "id": 10773,
          "title": {
            "caption": "گزارشات"
          },
          "moduleTitle": {
            "caption": null
          },
          "menuTitle": {
            "caption": "گزارشات"
          },
          "formTitle": null,
          "subMenuTitle": null,
          "tabFormTitle": null,
          "itemType": 2
        }
      ],
      "id": 5355,
      "title": {
        "caption": null
      },
      "moduleTitle": {
        "caption": null
      },
      "menuTitle": null,
      "formTitle": null,
      "subMenuTitle": null,
      "tabFormTitle": null,
      "itemType": 1
    },
    {
      "nodes": [
        {
          "nodes": [
            {
              "nodes": null,
              "id": 25902,
              "title": {
                "caption": "علل رویداد"
              },
              "moduleTitle": {
                "caption": null
              },
              "menuTitle": {
                "caption": "اطلاعات پایه"
              },
              "formTitle": {
                "caption": "علل رویداد"
              },
              "subMenuTitle": null,
              "tabFormTitle": null,
              "itemType": 4
            },
            {
              "nodes": null,
              "id": 25903,
              "title": {
                "caption": "انواع رویداد"
              },
              "moduleTitle": {
                "caption": null
              },
              "menuTitle": {
                "caption": "اطلاعات پایه"
              },
              "formTitle": {
                "caption": "انواع رویداد"
              },
              "subMenuTitle": null,
              "tabFormTitle": null,
              "itemType": 4
            },
            {
              "nodes": null,
              "id": 25904,
              "title": {
                "caption": "سطوح رویداد"
              },
              "moduleTitle": {
                "caption": null
              },
              "menuTitle": {
                "caption": "اطلاعات پایه"
              },
              "formTitle": {
                "caption": "سطوح رویداد"
              },
              "subMenuTitle": null,
              "tabFormTitle": null,
              "itemType": 4
            },
            {
              "nodes": null,
              "id": 25905,
              "title": {
                "caption": "پیامدهای رویداد"
              },
              "moduleTitle": {
                "caption": null
              },
              "menuTitle": {
                "caption": "اطلاعات پایه"
              },
              "formTitle": {
                "caption": "پیامدهای رویداد"
              },
              "subMenuTitle": null,
              "tabFormTitle": null,
              "itemType": 4
            },
            {
              "nodes": null,
              "id": 25906,
              "title": {
                "caption": "روزهای کاری از دست رفته"
              },
              "moduleTitle": {
                "caption": null
              },
              "menuTitle": {
                "caption": "اطلاعات پایه"
              },
              "formTitle": {
                "caption": "روزهای کاری از دست رفته"
              },
              "subMenuTitle": null,
              "tabFormTitle": null,
              "itemType": 4
            },
            {
              "nodes": null,
              "id": 25907,
              "title": {
                "caption": "اقدامات درمانی حادثه دیده"
              },
              "moduleTitle": {
                "caption": null
              },
              "menuTitle": {
                "caption": "اطلاعات پایه"
              },
              "formTitle": {
                "caption": "اقدامات درمانی حادثه دیده"
              },
              "subMenuTitle": null,
              "tabFormTitle": null,
              "itemType": 4
            }
          ],
          "id": 10774,
          "title": {
            "caption": "اطلاعات پایه"
          },
          "moduleTitle": {
            "caption": null
          },
          "menuTitle": {
            "caption": "اطلاعات پایه"
          },
          "formTitle": null,
          "subMenuTitle": null,
          "tabFormTitle": null,
          "itemType": 2
        },
        {
          "nodes": [
            {
              "nodes": null,
              "id": 25908,
              "title": {
                "caption": "حادثه"
              },
              "moduleTitle": {
                "caption": null
              },
              "menuTitle": {
                "caption": "ثبت رویداد"
              },
              "formTitle": {
                "caption": "حادثه"
              },
              "subMenuTitle": null,
              "tabFormTitle": null,
              "itemType": 4
            },
            {
              "nodes": null,
              "id": 25909,
              "title": {
                "caption": "شبه حادثه"
              },
              "moduleTitle": {
                "caption": null
              },
              "menuTitle": {
                "caption": "ثبت رویداد"
              },
              "formTitle": {
                "caption": "شبه حادثه"
              },
              "subMenuTitle": null,
              "tabFormTitle": null,
              "itemType": 4
            }
          ],
          "id": 10775,
          "title": {
            "caption": "ثبت رویداد"
          },
          "moduleTitle": {
            "caption": null
          },
          "menuTitle": {
            "caption": "ثبت رویداد"
          },
          "formTitle": null,
          "subMenuTitle": null,
          "tabFormTitle": null,
          "itemType": 2
        },
        {
          "nodes": [],
          "id": 10776,
          "title": {
            "caption": "گزارشات"
          },
          "moduleTitle": {
            "caption": null
          },
          "menuTitle": {
            "caption": "گزارشات"
          },
          "formTitle": null,
          "subMenuTitle": null,
          "tabFormTitle": null,
          "itemType": 2
        }
      ],
      "id": 5356,
      "title": {
        "caption": null
      },
      "moduleTitle": {
        "caption": null
      },
      "menuTitle": null,
      "formTitle": null,
      "subMenuTitle": null,
      "tabFormTitle": null,
      "itemType": 1
    },
    {
      "nodes": [
        {
          "nodes": [
            {
              "nodes": null,
              "id": 25910,
              "title": {
                "caption": "علل رویداد"
              },
              "moduleTitle": {
                "caption": null
              },
              "menuTitle": {
                "caption": "اطلاعات پایه"
              },
              "formTitle": {
                "caption": "علل رویداد"
              },
              "subMenuTitle": null,
              "tabFormTitle": null,
              "itemType": 4
            },
            {
              "nodes": null,
              "id": 25911,
              "title": {
                "caption": "انواع رویداد"
              },
              "moduleTitle": {
                "caption": null
              },
              "menuTitle": {
                "caption": "اطلاعات پایه"
              },
              "formTitle": {
                "caption": "انواع رویداد"
              },
              "subMenuTitle": null,
              "tabFormTitle": null,
              "itemType": 4
            },
            {
              "nodes": null,
              "id": 25912,
              "title": {
                "caption": "سطوح رویداد"
              },
              "moduleTitle": {
                "caption": null
              },
              "menuTitle": {
                "caption": "اطلاعات پایه"
              },
              "formTitle": {
                "caption": "سطوح رویداد"
              },
              "subMenuTitle": null,
              "tabFormTitle": null,
              "itemType": 4
            },
            {
              "nodes": null,
              "id": 25913,
              "title": {
                "caption": "پیامدهای رویداد"
              },
              "moduleTitle": {
                "caption": null
              },
              "menuTitle": {
                "caption": "اطلاعات پایه"
              },
              "formTitle": {
                "caption": "پیامدهای رویداد"
              },
              "subMenuTitle": null,
              "tabFormTitle": null,
              "itemType": 4
            },
            {
              "nodes": null,
              "id": 25914,
              "title": {
                "caption": "روزهای کاری از دست رفته"
              },
              "moduleTitle": {
                "caption": null
              },
              "menuTitle": {
                "caption": "اطلاعات پایه"
              },
              "formTitle": {
                "caption": "روزهای کاری از دست رفته"
              },
              "subMenuTitle": null,
              "tabFormTitle": null,
              "itemType": 4
            },
            {
              "nodes": null,
              "id": 25915,
              "title": {
                "caption": "اقدامات درمانی حادثه دیده"
              },
              "moduleTitle": {
                "caption": null
              },
              "menuTitle": {
                "caption": "اطلاعات پایه"
              },
              "formTitle": {
                "caption": "اقدامات درمانی حادثه دیده"
              },
              "subMenuTitle": null,
              "tabFormTitle": null,
              "itemType": 4
            }
          ],
          "id": 10777,
          "title": {
            "caption": "اطلاعات پایه"
          },
          "moduleTitle": {
            "caption": null
          },
          "menuTitle": {
            "caption": "اطلاعات پایه"
          },
          "formTitle": null,
          "subMenuTitle": null,
          "tabFormTitle": null,
          "itemType": 2
        },
        {
          "nodes": [
            {
              "nodes": null,
              "id": 25916,
              "title": {
                "caption": "حادثه"
              },
              "moduleTitle": {
                "caption": null
              },
              "menuTitle": {
                "caption": "ثبت رویداد"
              },
              "formTitle": {
                "caption": "حادثه"
              },
              "subMenuTitle": null,
              "tabFormTitle": null,
              "itemType": 4
            },
            {
              "nodes": null,
              "id": 25917,
              "title": {
                "caption": "شبه حادثه"
              },
              "moduleTitle": {
                "caption": null
              },
              "menuTitle": {
                "caption": "ثبت رویداد"
              },
              "formTitle": {
                "caption": "شبه حادثه"
              },
              "subMenuTitle": null,
              "tabFormTitle": null,
              "itemType": 4
            }
          ],
          "id": 10778,
          "title": {
            "caption": "ثبت رویداد"
          },
          "moduleTitle": {
            "caption": null
          },
          "menuTitle": {
            "caption": "ثبت رویداد"
          },
          "formTitle": null,
          "subMenuTitle": null,
          "tabFormTitle": null,
          "itemType": 2
        },
        {
          "nodes": [],
          "id": 10779,
          "title": {
            "caption": "گزارشات"
          },
          "moduleTitle": {
            "caption": null
          },
          "menuTitle": {
            "caption": "گزارشات"
          },
          "formTitle": null,
          "subMenuTitle": null,
          "tabFormTitle": null,
          "itemType": 2
        }
      ],
      "id": 5357,
      "title": {
        "caption": null
      },
      "moduleTitle": {
        "caption": null
      },
      "menuTitle": null,
      "formTitle": null,
      "subMenuTitle": null,
      "tabFormTitle": null,
      "itemType": 1
    },
    {
      "nodes": [
        {
          "nodes": [
            {
              "nodes": null,
              "id": 25918,
              "title": {
                "caption": "علل رویداد"
              },
              "moduleTitle": {
                "caption": null
              },
              "menuTitle": {
                "caption": "اطلاعات پایه"
              },
              "formTitle": {
                "caption": "علل رویداد"
              },
              "subMenuTitle": null,
              "tabFormTitle": null,
              "itemType": 4
            },
            {
              "nodes": null,
              "id": 25919,
              "title": {
                "caption": "انواع رویداد"
              },
              "moduleTitle": {
                "caption": null
              },
              "menuTitle": {
                "caption": "اطلاعات پایه"
              },
              "formTitle": {
                "caption": "انواع رویداد"
              },
              "subMenuTitle": null,
              "tabFormTitle": null,
              "itemType": 4
            },
            {
              "nodes": null,
              "id": 25920,
              "title": {
                "caption": "سطوح رویداد"
              },
              "moduleTitle": {
                "caption": null
              },
              "menuTitle": {
                "caption": "اطلاعات پایه"
              },
              "formTitle": {
                "caption": "سطوح رویداد"
              },
              "subMenuTitle": null,
              "tabFormTitle": null,
              "itemType": 4
            },
            {
              "nodes": null,
              "id": 25921,
              "title": {
                "caption": "پیامدهای رویداد"
              },
              "moduleTitle": {
                "caption": null
              },
              "menuTitle": {
                "caption": "اطلاعات پایه"
              },
              "formTitle": {
                "caption": "پیامدهای رویداد"
              },
              "subMenuTitle": null,
              "tabFormTitle": null,
              "itemType": 4
            },
            {
              "nodes": null,
              "id": 25922,
              "title": {
                "caption": "روزهای کاری از دست رفته"
              },
              "moduleTitle": {
                "caption": null
              },
              "menuTitle": {
                "caption": "اطلاعات پایه"
              },
              "formTitle": {
                "caption": "روزهای کاری از دست رفته"
              },
              "subMenuTitle": null,
              "tabFormTitle": null,
              "itemType": 4
            },
            {
              "nodes": null,
              "id": 25923,
              "title": {
                "caption": "اقدامات درمانی حادثه دیده"
              },
              "moduleTitle": {
                "caption": null
              },
              "menuTitle": {
                "caption": "اطلاعات پایه"
              },
              "formTitle": {
                "caption": "اقدامات درمانی حادثه دیده"
              },
              "subMenuTitle": null,
              "tabFormTitle": null,
              "itemType": 4
            }
          ],
          "id": 10780,
          "title": {
            "caption": "اطلاعات پایه"
          },
          "moduleTitle": {
            "caption": null
          },
          "menuTitle": {
            "caption": "اطلاعات پایه"
          },
          "formTitle": null,
          "subMenuTitle": null,
          "tabFormTitle": null,
          "itemType": 2
        },
        {
          "nodes": [
            {
              "nodes": null,
              "id": 25924,
              "title": {
                "caption": "حادثه"
              },
              "moduleTitle": {
                "caption": null
              },
              "menuTitle": {
                "caption": "ثبت رویداد"
              },
              "formTitle": {
                "caption": "حادثه"
              },
              "subMenuTitle": null,
              "tabFormTitle": null,
              "itemType": 4
            },
            {
              "nodes": null,
              "id": 25925,
              "title": {
                "caption": "شبه حادثه"
              },
              "moduleTitle": {
                "caption": null
              },
              "menuTitle": {
                "caption": "ثبت رویداد"
              },
              "formTitle": {
                "caption": "شبه حادثه"
              },
              "subMenuTitle": null,
              "tabFormTitle": null,
              "itemType": 4
            }
          ],
          "id": 10781,
          "title": {
            "caption": "ثبت رویداد"
          },
          "moduleTitle": {
            "caption": null
          },
          "menuTitle": {
            "caption": "ثبت رویداد"
          },
          "formTitle": null,
          "subMenuTitle": null,
          "tabFormTitle": null,
          "itemType": 2
        },
        {
          "nodes": [],
          "id": 10782,
          "title": {
            "caption": "گزارشات"
          },
          "moduleTitle": {
            "caption": null
          },
          "menuTitle": {
            "caption": "گزارشات"
          },
          "formTitle": null,
          "subMenuTitle": null,
          "tabFormTitle": null,
          "itemType": 2
        }
      ],
      "id": 5358,
      "title": {
        "caption": null
      },
      "moduleTitle": {
        "caption": null
      },
      "menuTitle": null,
      "formTitle": null,
      "subMenuTitle": null,
      "tabFormTitle": null,
      "itemType": 1
    },
    {
      "nodes": [
        {
          "nodes": [
            {
              "nodes": null,
              "id": 25926,
              "title": {
                "caption": "علل رویداد"
              },
              "moduleTitle": {
                "caption": null
              },
              "menuTitle": {
                "caption": "اطلاعات پایه"
              },
              "formTitle": {
                "caption": "علل رویداد"
              },
              "subMenuTitle": null,
              "tabFormTitle": null,
              "itemType": 4
            },
            {
              "nodes": null,
              "id": 25927,
              "title": {
                "caption": "انواع رویداد"
              },
              "moduleTitle": {
                "caption": null
              },
              "menuTitle": {
                "caption": "اطلاعات پایه"
              },
              "formTitle": {
                "caption": "انواع رویداد"
              },
              "subMenuTitle": null,
              "tabFormTitle": null,
              "itemType": 4
            },
            {
              "nodes": null,
              "id": 25928,
              "title": {
                "caption": "سطوح رویداد"
              },
              "moduleTitle": {
                "caption": null
              },
              "menuTitle": {
                "caption": "اطلاعات پایه"
              },
              "formTitle": {
                "caption": "سطوح رویداد"
              },
              "subMenuTitle": null,
              "tabFormTitle": null,
              "itemType": 4
            },
            {
              "nodes": null,
              "id": 25929,
              "title": {
                "caption": "پیامدهای رویداد"
              },
              "moduleTitle": {
                "caption": null
              },
              "menuTitle": {
                "caption": "اطلاعات پایه"
              },
              "formTitle": {
                "caption": "پیامدهای رویداد"
              },
              "subMenuTitle": null,
              "tabFormTitle": null,
              "itemType": 4
            },
            {
              "nodes": null,
              "id": 25930,
              "title": {
                "caption": "روزهای کاری از دست رفته"
              },
              "moduleTitle": {
                "caption": null
              },
              "menuTitle": {
                "caption": "اطلاعات پایه"
              },
              "formTitle": {
                "caption": "روزهای کاری از دست رفته"
              },
              "subMenuTitle": null,
              "tabFormTitle": null,
              "itemType": 4
            },
            {
              "nodes": null,
              "id": 25931,
              "title": {
                "caption": "اقدامات درمانی حادثه دیده"
              },
              "moduleTitle": {
                "caption": null
              },
              "menuTitle": {
                "caption": "اطلاعات پایه"
              },
              "formTitle": {
                "caption": "اقدامات درمانی حادثه دیده"
              },
              "subMenuTitle": null,
              "tabFormTitle": null,
              "itemType": 4
            }
          ],
          "id": 10783,
          "title": {
            "caption": "اطلاعات پایه"
          },
          "moduleTitle": {
            "caption": null
          },
          "menuTitle": {
            "caption": "اطلاعات پایه"
          },
          "formTitle": null,
          "subMenuTitle": null,
          "tabFormTitle": null,
          "itemType": 2
        },
        {
          "nodes": [
            {
              "nodes": null,
              "id": 25932,
              "title": {
                "caption": "حادثه"
              },
              "moduleTitle": {
                "caption": null
              },
              "menuTitle": {
                "caption": "ثبت رویداد"
              },
              "formTitle": {
                "caption": "حادثه"
              },
              "subMenuTitle": null,
              "tabFormTitle": null,
              "itemType": 4
            },
            {
              "nodes": null,
              "id": 25933,
              "title": {
                "caption": "شبه حادثه"
              },
              "moduleTitle": {
                "caption": null
              },
              "menuTitle": {
                "caption": "ثبت رویداد"
              },
              "formTitle": {
                "caption": "شبه حادثه"
              },
              "subMenuTitle": null,
              "tabFormTitle": null,
              "itemType": 4
            }
          ],
          "id": 10784,
          "title": {
            "caption": "ثبت رویداد"
          },
          "moduleTitle": {
            "caption": null
          },
          "menuTitle": {
            "caption": "ثبت رویداد"
          },
          "formTitle": null,
          "subMenuTitle": null,
          "tabFormTitle": null,
          "itemType": 2
        },
        {
          "nodes": [],
          "id": 10785,
          "title": {
            "caption": "گزارشات"
          },
          "moduleTitle": {
            "caption": null
          },
          "menuTitle": {
            "caption": "گزارشات"
          },
          "formTitle": null,
          "subMenuTitle": null,
          "tabFormTitle": null,
          "itemType": 2
        }
      ],
      "id": 5359,
      "title": {
        "caption": null
      },
      "moduleTitle": {
        "caption": null
      },
      "menuTitle": null,
      "formTitle": null,
      "subMenuTitle": null,
      "tabFormTitle": null,
      "itemType": 1
    },
    {
      "nodes": [
        {
          "nodes": [
            {
              "nodes": null,
              "id": 25934,
              "title": {
                "caption": "علل رویداد"
              },
              "moduleTitle": {
                "caption": null
              },
              "menuTitle": {
                "caption": "اطلاعات پایه"
              },
              "formTitle": {
                "caption": "علل رویداد"
              },
              "subMenuTitle": null,
              "tabFormTitle": null,
              "itemType": 4
            },
            {
              "nodes": null,
              "id": 25935,
              "title": {
                "caption": "انواع رویداد"
              },
              "moduleTitle": {
                "caption": null
              },
              "menuTitle": {
                "caption": "اطلاعات پایه"
              },
              "formTitle": {
                "caption": "انواع رویداد"
              },
              "subMenuTitle": null,
              "tabFormTitle": null,
              "itemType": 4
            },
            {
              "nodes": null,
              "id": 25936,
              "title": {
                "caption": "سطوح رویداد"
              },
              "moduleTitle": {
                "caption": null
              },
              "menuTitle": {
                "caption": "اطلاعات پایه"
              },
              "formTitle": {
                "caption": "سطوح رویداد"
              },
              "subMenuTitle": null,
              "tabFormTitle": null,
              "itemType": 4
            },
            {
              "nodes": null,
              "id": 25937,
              "title": {
                "caption": "پیامدهای رویداد"
              },
              "moduleTitle": {
                "caption": null
              },
              "menuTitle": {
                "caption": "اطلاعات پایه"
              },
              "formTitle": {
                "caption": "پیامدهای رویداد"
              },
              "subMenuTitle": null,
              "tabFormTitle": null,
              "itemType": 4
            },
            {
              "nodes": null,
              "id": 25938,
              "title": {
                "caption": "روزهای کاری از دست رفته"
              },
              "moduleTitle": {
                "caption": null
              },
              "menuTitle": {
                "caption": "اطلاعات پایه"
              },
              "formTitle": {
                "caption": "روزهای کاری از دست رفته"
              },
              "subMenuTitle": null,
              "tabFormTitle": null,
              "itemType": 4
            },
            {
              "nodes": null,
              "id": 25939,
              "title": {
                "caption": "اقدامات درمانی حادثه دیده"
              },
              "moduleTitle": {
                "caption": null
              },
              "menuTitle": {
                "caption": "اطلاعات پایه"
              },
              "formTitle": {
                "caption": "اقدامات درمانی حادثه دیده"
              },
              "subMenuTitle": null,
              "tabFormTitle": null,
              "itemType": 4
            }
          ],
          "id": 10786,
          "title": {
            "caption": "اطلاعات پایه"
          },
          "moduleTitle": {
            "caption": null
          },
          "menuTitle": {
            "caption": "اطلاعات پایه"
          },
          "formTitle": null,
          "subMenuTitle": null,
          "tabFormTitle": null,
          "itemType": 2
        },
        {
          "nodes": [
            {
              "nodes": null,
              "id": 25940,
              "title": {
                "caption": "حادثه"
              },
              "moduleTitle": {
                "caption": null
              },
              "menuTitle": {
                "caption": "ثبت رویداد"
              },
              "formTitle": {
                "caption": "حادثه"
              },
              "subMenuTitle": null,
              "tabFormTitle": null,
              "itemType": 4
            },
            {
              "nodes": null,
              "id": 25941,
              "title": {
                "caption": "شبه حادثه"
              },
              "moduleTitle": {
                "caption": null
              },
              "menuTitle": {
                "caption": "ثبت رویداد"
              },
              "formTitle": {
                "caption": "شبه حادثه"
              },
              "subMenuTitle": null,
              "tabFormTitle": null,
              "itemType": 4
            }
          ],
          "id": 10787,
          "title": {
            "caption": "ثبت رویداد"
          },
          "moduleTitle": {
            "caption": null
          },
          "menuTitle": {
            "caption": "ثبت رویداد"
          },
          "formTitle": null,
          "subMenuTitle": null,
          "tabFormTitle": null,
          "itemType": 2
        },
        {
          "nodes": [],
          "id": 10788,
          "title": {
            "caption": "گزارشات"
          },
          "moduleTitle": {
            "caption": null
          },
          "menuTitle": {
            "caption": "گزارشات"
          },
          "formTitle": null,
          "subMenuTitle": null,
          "tabFormTitle": null,
          "itemType": 2
        }
      ],
      "id": 5360,
      "title": {
        "caption": null
      },
      "moduleTitle": {
        "caption": null
      },
      "menuTitle": null,
      "formTitle": null,
      "subMenuTitle": null,
      "tabFormTitle": null,
      "itemType": 1
    },
    {
      "nodes": [
        {
          "nodes": [],
          "id": 10729,
          "title": {
            "caption": "اطلاعات پایه"
          },
          "moduleTitle": {
            "caption": "پایش"
          },
          "menuTitle": {
            "caption": "اطلاعات پایه"
          },
          "formTitle": null,
          "subMenuTitle": null,
          "tabFormTitle": null,
          "itemType": 2
        },
        {
          "nodes": [],
          "id": 10730,
          "title": {
            "caption": "چک لیست"
          },
          "moduleTitle": {
            "caption": "پایش"
          },
          "menuTitle": {
            "caption": "چک لیست"
          },
          "formTitle": null,
          "subMenuTitle": null,
          "tabFormTitle": null,
          "itemType": 2
        },
        {
          "nodes": [
            {
              "nodes": null,
              "id": 25755,
              "title": {
                "caption": "گروه های اجرایی"
              },
              "moduleTitle": {
                "caption": "پایش"
              },
              "menuTitle": {
                "caption": "بازدید از گروه اجرایی"
              },
              "formTitle": {
                "caption": "گروه های اجرایی"
              },
              "subMenuTitle": null,
              "tabFormTitle": null,
              "itemType": 4
            },
            {
              "nodes": null,
              "id": 25756,
              "title": {
                "caption": "برنامه گروه های اجرایی"
              },
              "moduleTitle": {
                "caption": "پایش"
              },
              "menuTitle": {
                "caption": "بازدید از گروه اجرایی"
              },
              "formTitle": {
                "caption": "برنامه گروه های اجرایی"
              },
              "subMenuTitle": null,
              "tabFormTitle": null,
              "itemType": 4
            },
            {
              "nodes": null,
              "id": 25757,
              "title": {
                "caption": "لیست بازدید از گروه ها"
              },
              "moduleTitle": {
                "caption": "پایش"
              },
              "menuTitle": {
                "caption": "بازدید از گروه اجرایی"
              },
              "formTitle": {
                "caption": "لیست بازدید از گروه ها"
              },
              "subMenuTitle": null,
              "tabFormTitle": null,
              "itemType": 4
            },
            {
              "nodes": null,
              "id": 25864,
              "title": {
                "caption": "پرسنل"
              },
              "moduleTitle": {
                "caption": "پایش"
              },
              "menuTitle": {
                "caption": "بازدید از گروه اجرایی"
              },
              "formTitle": {
                "caption": "لیست بازدید از گروه ها"
              },
              "subMenuTitle": null,
              "tabFormTitle": {
                "caption": "پرسنل"
              },
              "itemType": 5
            },
            {
              "nodes": null,
              "id": 25865,
              "title": {
                "caption": "لوازم ایمنی گروهی"
              },
              "moduleTitle": {
                "caption": "پایش"
              },
              "menuTitle": {
                "caption": "بازدید از گروه اجرایی"
              },
              "formTitle": {
                "caption": "لیست بازدید از گروه ها"
              },
              "subMenuTitle": null,
              "tabFormTitle": {
                "caption": "لوازم ایمنی گروهی"
              },
              "itemType": 5
            },
            {
              "nodes": null,
              "id": 25866,
              "title": {
                "caption": "اطلاعات خودرو"
              },
              "moduleTitle": {
                "caption": "پایش"
              },
              "menuTitle": {
                "caption": "بازدید از گروه اجرایی"
              },
              "formTitle": {
                "caption": "لیست بازدید از گروه ها"
              },
              "subMenuTitle": null,
              "tabFormTitle": {
                "caption": "اطلاعات خودرو"
              },
              "itemType": 5
            },
            {
              "nodes": null,
              "id": 25867,
              "title": {
                "caption": "نتیجه بازدید"
              },
              "moduleTitle": {
                "caption": "پایش"
              },
              "menuTitle": {
                "caption": "بازدید از گروه اجرایی"
              },
              "formTitle": {
                "caption": "لیست بازدید از گروه ها"
              },
              "subMenuTitle": null,
              "tabFormTitle": {
                "caption": "نتیجه بازدید"
              },
              "itemType": 5
            }
          ],
          "id": 10731,
          "title": {
            "caption": "بازدید از گروه اجرایی"
          },
          "moduleTitle": {
            "caption": "پایش"
          },
          "menuTitle": {
            "caption": "بازدید از گروه اجرایی"
          },
          "formTitle": null,
          "subMenuTitle": null,
          "tabFormTitle": null,
          "itemType": 2
        },
        {
          "nodes": [
            {
              "nodes": null,
              "id": 25758,
              "title": {
                "caption": "زون(بخش)"
              },
              "moduleTitle": {
                "caption": "پایش"
              },
              "menuTitle": {
                "caption": "بازدید از حریم شبکه"
              },
              "formTitle": {
                "caption": "زون(بخش)"
              },
              "subMenuTitle": null,
              "tabFormTitle": null,
              "itemType": 4
            },
            {
              "nodes": null,
              "id": 25759,
              "title": {
                "caption": "فیدر/انشعاب"
              },
              "moduleTitle": {
                "caption": "پایش"
              },
              "menuTitle": {
                "caption": "بازدید از حریم شبکه"
              },
              "formTitle": {
                "caption": "فیدر/انشعاب"
              },
              "subMenuTitle": null,
              "tabFormTitle": null,
              "itemType": 4
            },
            {
              "nodes": null,
              "id": 25760,
              "title": {
                "caption": "استعلام حریم شبکه"
              },
              "moduleTitle": {
                "caption": "پایش"
              },
              "menuTitle": {
                "caption": "بازدید از حریم شبکه"
              },
              "formTitle": {
                "caption": "استعلام حریم شبکه"
              },
              "subMenuTitle": null,
              "tabFormTitle": null,
              "itemType": 4
            },
            {
              "nodes": null,
              "id": 25761,
              "title": {
                "caption": "برنامه بازدید از حریم شبکه"
              },
              "moduleTitle": {
                "caption": "پایش"
              },
              "menuTitle": {
                "caption": "بازدید از حریم شبکه"
              },
              "formTitle": {
                "caption": "برنامه بازدید از حریم شبکه"
              },
              "subMenuTitle": null,
              "tabFormTitle": null,
              "itemType": 4
            },
            {
              "nodes": null,
              "id": 25762,
              "title": {
                "caption": "لیست بازدید از حریم شیکه"
              },
              "moduleTitle": {
                "caption": "پایش"
              },
              "menuTitle": {
                "caption": "بازدید از حریم شبکه"
              },
              "formTitle": {
                "caption": "لیست بازدید از حریم شیکه"
              },
              "subMenuTitle": null,
              "tabFormTitle": null,
              "itemType": 4
            },
            {
              "nodes": null,
              "id": 25763,
              "title": {
                "caption": "پیگیری رفع نقض حریم"
              },
              "moduleTitle": {
                "caption": "پایش"
              },
              "menuTitle": {
                "caption": "بازدید از حریم شبکه"
              },
              "formTitle": {
                "caption": "پیگیری رفع نقض حریم"
              },
              "subMenuTitle": null,
              "tabFormTitle": null,
              "itemType": 4
            },
            {
              "nodes": null,
              "id": 25764,
              "title": {
                "caption": "اخطاریه رفع نقض حریم"
              },
              "moduleTitle": {
                "caption": "پایش"
              },
              "menuTitle": {
                "caption": "بازدید از حریم شبکه"
              },
              "formTitle": {
                "caption": "اخطاریه رفع نقض حریم"
              },
              "subMenuTitle": null,
              "tabFormTitle": null,
              "itemType": 4
            },
            {
              "nodes": null,
              "id": 25868,
              "title": {
                "caption": "اطلاعات نقض حریم شبکه"
              },
              "moduleTitle": {
                "caption": "پایش"
              },
              "menuTitle": {
                "caption": "بازدید از حریم شبکه"
              },
              "formTitle": {
                "caption": "لیست بازدید از حریم شیکه"
              },
              "subMenuTitle": null,
              "tabFormTitle": {
                "caption": "اطلاعات نقض حریم شبکه"
              },
              "itemType": 5
            }
          ],
          "id": 10732,
          "title": {
            "caption": "بازدید از حریم شبکه"
          },
          "moduleTitle": {
            "caption": "پایش"
          },
          "menuTitle": {
            "caption": "بازدید از حریم شبکه"
          },
          "formTitle": null,
          "subMenuTitle": null,
          "tabFormTitle": null,
          "itemType": 2
        },
        {
          "nodes": [
            {
              "nodes": null,
              "id": 25765,
              "title": {
                "caption": "شناسایی کانون خطر"
              },
              "moduleTitle": {
                "caption": "پایش"
              },
              "menuTitle": {
                "caption": "کانون خطر"
              },
              "formTitle": {
                "caption": "شناسایی کانون خطر"
              },
              "subMenuTitle": null,
              "tabFormTitle": null,
              "itemType": 4
            }
          ],
          "id": 10733,
          "title": {
            "caption": "کانون خطر"
          },
          "moduleTitle": {
            "caption": "پایش"
          },
          "menuTitle": {
            "caption": "کانون خطر"
          },
          "formTitle": null,
          "subMenuTitle": null,
          "tabFormTitle": null,
          "itemType": 2
        },
        {
          "nodes": [
            {
              "nodes": null,
              "id": 25766,
              "title": {
                "caption": "خاموشی"
              },
              "moduleTitle": {
                "caption": "پایش"
              },
              "menuTitle": {
                "caption": "خاموشی"
              },
              "formTitle": {
                "caption": "خاموشی"
              },
              "subMenuTitle": null,
              "tabFormTitle": null,
              "itemType": 4
            }
          ],
          "id": 10734,
          "title": {
            "caption": "خاموشی"
          },
          "moduleTitle": {
            "caption": "پایش"
          },
          "menuTitle": {
            "caption": "خاموشی"
          },
          "formTitle": null,
          "subMenuTitle": null,
          "tabFormTitle": null,
          "itemType": 2
        },
        {
          "nodes": [
            {
              "nodes": null,
              "id": 25858,
              "title": {
                "caption": "توصیه ها"
              },
              "moduleTitle": {
                "caption": "پایش"
              },
              "menuTitle": {
                "caption": "چک لیست"
              },
              "formTitle": {
                "caption": "توصیه ها"
              },
              "subMenuTitle": null,
              "tabFormTitle": null,
              "itemType": 4
            }
          ],
          "id": 10759,
          "title": {
            "caption": "چک لیست"
          },
          "moduleTitle": {
            "caption": "پایش"
          },
          "menuTitle": {
            "caption": "چک لیست"
          },
          "formTitle": null,
          "subMenuTitle": null,
          "tabFormTitle": null,
          "itemType": 3
        },
        {
          "nodes": [
            {
              "nodes": null,
              "id": 25859,
              "title": {
                "caption": "انواع فعالیت"
              },
              "moduleTitle": {
                "caption": "پایش"
              },
              "menuTitle": {
                "caption": "بازدید از گروه اجرایی"
              },
              "formTitle": {
                "caption": "انواع فعالیت"
              },
              "subMenuTitle": null,
              "tabFormTitle": null,
              "itemType": 4
            },
            {
              "nodes": null,
              "id": 25860,
              "title": {
                "caption": "لوازم حفاظتی فعالیت"
              },
              "moduleTitle": {
                "caption": "پایش"
              },
              "menuTitle": {
                "caption": "بازدید از گروه اجرایی"
              },
              "formTitle": {
                "caption": "لوازم حفاظتی فعالیت"
              },
              "subMenuTitle": null,
              "tabFormTitle": null,
              "itemType": 4
            },
            {
              "nodes": null,
              "id": 25861,
              "title": {
                "caption": "لیست تصمیمات"
              },
              "moduleTitle": {
                "caption": "پایش"
              },
              "menuTitle": {
                "caption": "بازدید از گروه اجرایی"
              },
              "formTitle": {
                "caption": "لیست تصمیمات"
              },
              "subMenuTitle": null,
              "tabFormTitle": null,
              "itemType": 4
            }
          ],
          "id": 10760,
          "title": {
            "caption": "بازدید از گروه اجرایی"
          },
          "moduleTitle": {
            "caption": "پایش"
          },
          "menuTitle": {
            "caption": "بازدید از گروه اجرایی"
          },
          "formTitle": null,
          "subMenuTitle": null,
          "tabFormTitle": null,
          "itemType": 3
        },
        {
          "nodes": [
            {
              "nodes": null,
              "id": 25862,
              "title": {
                "caption": "موارد نقض حریم"
              },
              "moduleTitle": {
                "caption": "پایش"
              },
              "menuTitle": {
                "caption": "بازدید از حریم شبکه"
              },
              "formTitle": {
                "caption": "موارد نقض حریم"
              },
              "subMenuTitle": null,
              "tabFormTitle": null,
              "itemType": 4
            }
          ],
          "id": 10761,
          "title": {
            "caption": "بازدید از حریم شبکه"
          },
          "moduleTitle": {
            "caption": "پایش"
          },
          "menuTitle": {
            "caption": "بازدید از حریم شبکه"
          },
          "formTitle": null,
          "subMenuTitle": null,
          "tabFormTitle": null,
          "itemType": 3
        },
        {
          "nodes": [
            {
              "nodes": null,
              "id": 25863,
              "title": {
                "caption": "لیست خطرات"
              },
              "moduleTitle": {
                "caption": "پایش"
              },
              "menuTitle": {
                "caption": "شناسایی کانون خطر"
              },
              "formTitle": {
                "caption": "لیست خطرات"
              },
              "subMenuTitle": null,
              "tabFormTitle": null,
              "itemType": 4
            }
          ],
          "id": 10762,
          "title": {
            "caption": "شناسایی کانون خطر"
          },
          "moduleTitle": {
            "caption": "پایش"
          },
          "menuTitle": {
            "caption": "شناسایی کانون خطر"
          },
          "formTitle": null,
          "subMenuTitle": null,
          "tabFormTitle": null,
          "itemType": 3
        }
      ],
      "id": 5341,
      "title": {
        "caption": "پایش"
      },
      "moduleTitle": {
        "caption": "پایش"
      },
      "menuTitle": null,
      "formTitle": null,
      "subMenuTitle": null,
      "tabFormTitle": null,
      "itemType": 1
    },
    {
      "nodes": [
        {
          "nodes": [
            {
              "nodes": null,
              "id": 25814,
              "title": {
                "caption": "گروه بانک دانش"
              },
              "moduleTitle": {
                "caption": "بانک دانش"
              },
              "menuTitle": {
                "caption": "اطلاعات پایه"
              },
              "formTitle": {
                "caption": "گروه بانک دانش"
              },
              "subMenuTitle": null,
              "tabFormTitle": null,
              "itemType": 4
            },
            {
              "nodes": null,
              "id": 25815,
              "title": {
                "caption": "زیرگروه بانک دانش"
              },
              "moduleTitle": {
                "caption": "بانک دانش"
              },
              "menuTitle": {
                "caption": "اطلاعات پایه"
              },
              "formTitle": {
                "caption": "زیرگروه بانک دانش"
              },
              "subMenuTitle": null,
              "tabFormTitle": null,
              "itemType": 4
            }
          ],
          "id": 10752,
          "title": {
            "caption": "اطلاعات پایه"
          },
          "moduleTitle": {
            "caption": "بانک دانش"
          },
          "menuTitle": {
            "caption": "اطلاعات پایه"
          },
          "formTitle": null,
          "subMenuTitle": null,
          "tabFormTitle": null,
          "itemType": 2
        },
        {
          "nodes": [
            {
              "nodes": null,
              "id": 25816,
              "title": {
                "caption": "بانک دانش"
              },
              "moduleTitle": {
                "caption": "بانک دانش"
              },
              "menuTitle": {
                "caption": "بانک دانش"
              },
              "formTitle": {
                "caption": "بانک دانش"
              },
              "subMenuTitle": null,
              "tabFormTitle": null,
              "itemType": 4
            }
          ],
          "id": 10753,
          "title": {
            "caption": "بانک دانش"
          },
          "moduleTitle": {
            "caption": "بانک دانش"
          },
          "menuTitle": {
            "caption": "بانک دانش"
          },
          "formTitle": null,
          "subMenuTitle": null,
          "tabFormTitle": null,
          "itemType": 2
        }
      ],
      "id": 5350,
      "title": {
        "caption": "بانک دانش"
      },
      "moduleTitle": {
        "caption": "بانک دانش"
      },
      "menuTitle": null,
      "formTitle": null,
      "subMenuTitle": null,
      "tabFormTitle": null,
      "itemType": 1
    },
    {
      "nodes": [],
      "id": 5351,
      "title": {
        "caption": "تضمین کیفیت"
      },
      "moduleTitle": {
        "caption": "تضمین کیفیت"
      },
      "menuTitle": null,
      "formTitle": null,
      "subMenuTitle": null,
      "tabFormTitle": null,
      "itemType": 1
    },
    {
      "nodes": [
        {
          "nodes": [
            {
              "nodes": null,
              "id": 25817,
              "title": {
                "caption": "لاگ احراز هویت"
              },
              "moduleTitle": {
                "caption": "مدیریت نرم افزار"
              },
              "menuTitle": {
                "caption": "رویدادهای سیستم"
              },
              "formTitle": {
                "caption": "لاگ احراز هویت"
              },
              "subMenuTitle": null,
              "tabFormTitle": null,
              "itemType": 4
            },
            {
              "nodes": null,
              "id": 25818,
              "title": {
                "caption": "لاگ حساب کاربری"
              },
              "moduleTitle": {
                "caption": "مدیریت نرم افزار"
              },
              "menuTitle": {
                "caption": "رویدادهای سیستم"
              },
              "formTitle": {
                "caption": "لاگ حساب کاربری"
              },
              "subMenuTitle": null,
              "tabFormTitle": null,
              "itemType": 4
            },
            {
              "nodes": null,
              "id": 25819,
              "title": {
                "caption": "لاگ نگهداری سیستم"
              },
              "moduleTitle": {
                "caption": "مدیریت نرم افزار"
              },
              "menuTitle": {
                "caption": "رویدادهای سیستم"
              },
              "formTitle": {
                "caption": "لاگ نگهداری سیستم"
              },
              "subMenuTitle": null,
              "tabFormTitle": null,
              "itemType": 4
            },
            {
              "nodes": null,
              "id": 25820,
              "title": {
                "caption": "لاگ عملیات حذف"
              },
              "moduleTitle": {
                "caption": "مدیریت نرم افزار"
              },
              "menuTitle": {
                "caption": "رویدادهای سیستم"
              },
              "formTitle": {
                "caption": "لاگ عملیات حذف"
              },
              "subMenuTitle": null,
              "tabFormTitle": null,
              "itemType": 4
            },
            {
              "nodes": null,
              "id": 25821,
              "title": {
                "caption": "لاگ فایل ها"
              },
              "moduleTitle": {
                "caption": "مدیریت نرم افزار"
              },
              "menuTitle": {
                "caption": "رویدادهای سیستم"
              },
              "formTitle": {
                "caption": "لاگ فایل ها"
              },
              "subMenuTitle": null,
              "tabFormTitle": null,
              "itemType": 4
            },
            {
              "nodes": null,
              "id": 25822,
              "title": {
                "caption": "خواندن رکورد های لاگ"
              },
              "moduleTitle": {
                "caption": "مدیریت نرم افزار"
              },
              "menuTitle": {
                "caption": "رویدادهای سیستم"
              },
              "formTitle": {
                "caption": "خواندن رکورد های لاگ"
              },
              "subMenuTitle": null,
              "tabFormTitle": null,
              "itemType": 4
            }
          ],
          "id": 10754,
          "title": {
            "caption": "رویدادهای سیستم"
          },
          "moduleTitle": {
            "caption": "مدیریت نرم افزار"
          },
          "menuTitle": {
            "caption": "رویدادهای سیستم"
          },
          "formTitle": null,
          "subMenuTitle": null,
          "tabFormTitle": null,
          "itemType": 2
        },
        {
          "nodes": [
            {
              "nodes": null,
              "id": 25823,
              "title": {
                "caption": "گروه کاربران"
              },
              "moduleTitle": {
                "caption": "مدیریت نرم افزار"
              },
              "menuTitle": {
                "caption": "مدیریت دسترسی"
              },
              "formTitle": {
                "caption": "گروه کاربران"
              },
              "subMenuTitle": null,
              "tabFormTitle": null,
              "itemType": 4
            },
            {
              "nodes": null,
              "id": 25824,
              "title": {
                "caption": "کاربران"
              },
              "moduleTitle": {
                "caption": "مدیریت نرم افزار"
              },
              "menuTitle": {
                "caption": "مدیریت دسترسی"
              },
              "formTitle": {
                "caption": "کاربران"
              },
              "subMenuTitle": null,
              "tabFormTitle": null,
              "itemType": 4
            },
            {
              "nodes": null,
              "id": 25825,
              "title": {
                "caption": "کنترل های دسترسی"
              },
              "moduleTitle": {
                "caption": "مدیریت نرم افزار"
              },
              "menuTitle": {
                "caption": "مدیریت دسترسی"
              },
              "formTitle": {
                "caption": "کنترل های دسترسی"
              },
              "subMenuTitle": null,
              "tabFormTitle": null,
              "itemType": 4
            },
            {
              "nodes": null,
              "id": 25826,
              "title": {
                "caption": "مسدودیت بر اساس ورود غیر مجاز"
              },
              "moduleTitle": {
                "caption": "مدیریت نرم افزار"
              },
              "menuTitle": {
                "caption": "مدیریت دسترسی"
              },
              "formTitle": {
                "caption": "مسدودیت بر اساس ورود غیر مجاز"
              },
              "subMenuTitle": null,
              "tabFormTitle": null,
              "itemType": 4
            }
          ],
          "id": 10755,
          "title": {
            "caption": "مدیریت دسترسی"
          },
          "moduleTitle": {
            "caption": "مدیریت نرم افزار"
          },
          "menuTitle": {
            "caption": "مدیریت دسترسی"
          },
          "formTitle": null,
          "subMenuTitle": null,
          "tabFormTitle": null,
          "itemType": 2
        },
        {
          "nodes": [
            {
              "nodes": null,
              "id": 25827,
              "title": {
                "caption": "تنظیمات پیش فرض سیستم"
              },
              "moduleTitle": {
                "caption": "مدیریت نرم افزار"
              },
              "menuTitle": {
                "caption": "تنظیمات نرم افزار"
              },
              "formTitle": {
                "caption": "تنظیمات پیش فرض سیستم"
              },
              "subMenuTitle": null,
              "tabFormTitle": null,
              "itemType": 4
            },
            {
              "nodes": null,
              "id": 25828,
              "title": {
                "caption": "تنظیمات رمز عبور"
              },
              "moduleTitle": {
                "caption": "مدیریت نرم افزار"
              },
              "menuTitle": {
                "caption": "تنظیمات نرم افزار"
              },
              "formTitle": {
                "caption": "تنظیمات رمز عبور"
              },
              "subMenuTitle": null,
              "tabFormTitle": null,
              "itemType": 4
            }
          ],
          "id": 10756,
          "title": {
            "caption": "تنظیمات نرم افزار"
          },
          "moduleTitle": {
            "caption": "مدیریت نرم افزار"
          },
          "menuTitle": {
            "caption": "تنظیمات نرم افزار"
          },
          "formTitle": null,
          "subMenuTitle": null,
          "tabFormTitle": null,
          "itemType": 2
        },
        {
          "nodes": [
            {
              "nodes": null,
              "id": 25829,
              "title": {
                "caption": "تنظیمات آلارم"
              },
              "moduleTitle": {
                "caption": "مدیریت نرم افزار"
              },
              "menuTitle": {
                "caption": "مدیریت آلارم"
              },
              "formTitle": {
                "caption": "تنظیمات آلارم"
              },
              "subMenuTitle": null,
              "tabFormTitle": null,
              "itemType": 4
            }
          ],
          "id": 10757,
          "title": {
            "caption": "مدیریت آلارم"
          },
          "moduleTitle": {
            "caption": "مدیریت نرم افزار"
          },
          "menuTitle": {
            "caption": "مدیریت آلارم"
          },
          "formTitle": null,
          "subMenuTitle": null,
          "tabFormTitle": null,
          "itemType": 2
        },
        {
          "nodes": [
            {
              "nodes": null,
              "id": 25830,
              "title": {
                "caption": "تغییر نام ماژول ها/منوها"
              },
              "moduleTitle": {
                "caption": "مدیریت نرم افزار"
              },
              "menuTitle": {
                "caption": "تغییر عناوین"
              },
              "formTitle": {
                "caption": "تغییر نام ماژول ها/منوها"
              },
              "subMenuTitle": null,
              "tabFormTitle": null,
              "itemType": 4
            },
            {
              "nodes": null,
              "id": 25831,
              "title": {
                "caption": "تغییر نام لیبل ها/عنوان ها"
              },
              "moduleTitle": {
                "caption": "مدیریت نرم افزار"
              },
              "menuTitle": {
                "caption": "تغییر عناوین"
              },
              "formTitle": {
                "caption": "تغییر نام لیبل ها/عنوان ها"
              },
              "subMenuTitle": null,
              "tabFormTitle": null,
              "itemType": 4
            },
            {
              "nodes": null,
              "id": 25832,
              "title": {
                "caption": "تغییر متن پیغام ها"
              },
              "moduleTitle": {
                "caption": "مدیریت نرم افزار"
              },
              "menuTitle": {
                "caption": "تغییر عناوین"
              },
              "formTitle": {
                "caption": "تغییر متن پیغام ها"
              },
              "subMenuTitle": null,
              "tabFormTitle": null,
              "itemType": 4
            }
          ],
          "id": 10758,
          "title": {
            "caption": "تغییر عناوین"
          },
          "moduleTitle": {
            "caption": "مدیریت نرم افزار"
          },
          "menuTitle": {
            "caption": "تغییر عناوین"
          },
          "formTitle": null,
          "subMenuTitle": null,
          "tabFormTitle": null,
          "itemType": 2
        }
      ],
      "id": 5352,
      "title": {
        "caption": "مدیریت نرم افزار"
      },
      "moduleTitle": {
        "caption": "مدیریت نرم افزار"
      },
      "menuTitle": null,
      "formTitle": null,
      "subMenuTitle": null,
      "tabFormTitle": null,
      "itemType": 1
    }
  ];
  dataSource = new NgmDataSource();
  treeGridConfig: INgmTreeGridConfig = {
    columns: [
      {
        header: 'Title: ',
        key: 'title',
        getText: (item) => item.title.caption
      },
      {
        header: 'Id: ',
        key: 'id'
      }
    ]
  }



  ngOnInit() {
    this.dataSource.data = this.data;
    this.dataSource.getChildrenFn = (obj: any) => obj.nodes ?? []
  }

  onExpand(e: INgmExpansion) {
    console.log('expand:   ', e)
  }

  onCollapse(e: INgmExpansion) {
    console.log('collapse:   ', e)
  }
}
