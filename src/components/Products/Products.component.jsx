import React, { useState } from 'react'
import style from './Products.module.scss'

export default function Products() {
    let myObj = [
        {
            path: './images/1-Calcium_Carbonate20150602_012613.jpg',
            title: 'Calcium Carbonate 96%',
            FOB: '$ 0 / Metric Tons',
            Quantity: '100 / Metric Tons',
            Ability: '10000 Metric Tons per Month',
            Port: 'Alexandria- Egypt',
            Purity: '96% - '
        },
        { path: './images/2.jpg', title: 'Calcium Carbonate 96%',
        FOB: '$ 0 / Metric Tons',
        Quantity: '20 / Metric Tons',
        Ability: '500 Metric Tons per Month',
        Port: 'Alexandria- Egypt',
        Purity: '80% - 40% -'
       },
        { path: './images/3-Ferric_chloride.jpg', title: 'Calcium Carbonate 96%',
        FOB: '$ 0 / Metric Tons',
        Quantity: '20 / Metric Tons',
        Ability: '500 Metric Tons per Month',
        Port: 'Alexandria- Egypt',
        Purity: '80% - 40% -' },
        { path: './images/4-Magnesium_Oxide_80.jpg', title: 'Magnesium Oxide' ,
        FOB: '$ 0 / Metric Tons',
        Quantity: '20 / Metric Tons',
        Ability: '500 Metric Tons per Month',
        Port: 'Alexandria- Egypt',
        Purity: '80% - 40% -'}
    ]
    let [myInfo, setInfo] = useState(' ')
    let getData = (element) => {
        setInfo(element)
    }
    return (
        <div className={`${style.products} `}>
            <div className="container">
                <div className={`${style.title}`}>
                    <h2>Products</h2>
                    <p>Trendy</p>
                </div>
                <div className="row">
                    {myObj.map((item, index) => (
                        <div className="col-lg-3" key={index}>
                            <div className={`${style.item}`}>
                                <img src={item.path} alt="product-Images" className="w-100" />
                                <h3 className={`${style.Itemtitle}`}>{item.title}</h3>
                                <div className={`${style.ItemBtn}`}>
                                    <i
                                        className="fa-regular fa-eye"
                                        onClick={() => getData(item)}
                                        data-bs-toggle="modal"
                                        data-bs-target="#staticBackdrop"
                                    ></i>
                                    <a href="/" className={`${style.Btn}`}><i className="fa-brands fa-whatsapp"></i> </a>
                                </div>
                            </div>
                        </div>
                    ))}

                    <div
                        className={`${style.Modal} modal fade`}
                        id="staticBackdrop"
                        data-bs-backdrop="static"
                        data-bs-keyboard="false"
                        tabIndex={-1}
                        aria-labelledby="staticBackdropLabel"
                        aria-hidden="true"
                    >
                        <div className="modal-dialog modal-xl">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h1 className={`${style.modalTitle} modal-title fs-5`} id="staticBackdropLabel">
                                        {myInfo.title}
                                    </h1>
                                    <button
                                        type="button"
                                        className="btn-close"
                                        data-bs-dismiss="modal"
                                        aria-label="Close"
                                    />
                                </div>
                                <div className={`${style.body} modal-body`}>
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <img
                                                src={myInfo.path}
                                                alt="productImg"
                                                className={`${style.modalImg} w-100`}
                                            />
                                            <button className={`${style.downloadBtns} btn btn-primary`}>
                                                <i className="fa-solid fa-download"></i>Download Specifications
                                            </button>
                                            <button className={`${style.downloadBtns} btn btn-primary`}>
                                                Inquiry Product
                                            </button>
                                        </div>
                                        <div className="col-lg-6">
                                            <p>
                                                FOB Price : <span>{myInfo.FOB}</span>
                                            </p>
                                            <p>
                                                Min.Order Quantity : <span>{myInfo.Quantity}</span>
                                            </p>
                                            <p>
                                                Supply Ability : <span>{myInfo.Ability}</span>
                                            </p>
                                            <p>
                                                Port : <span>{myInfo.Port}</span>
                                            </p>
                                            <p>
                                                Purity :<span>{myInfo.Purity}</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button
                                        type="button"
                                        className={`${style.modalClose} btn btn-secondary`}
                                        data-bs-dismiss="modal"
                                    >
                                        Close
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
