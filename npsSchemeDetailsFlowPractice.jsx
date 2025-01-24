import React from 'react'

const npsSchemeDetailsFlowPractice = () => {


    const getFundManagerList = (searchKeyword: string) => {
        let pensionFundManagersApi = `${ApiEndpoints.GET_PENSION_FUND_MANAGERS}`
        if (searchKeyword) {
            pensionFundManagersApi += `?schemeName.contains=${searchKeyword}&schemeTier.equals=${tierTypeName}`
        }
        else {
            pensionFundManagersApi += `?schemeTier.equals=${tierTypeName}`
        }
        axiosInstance.get(pensionFundManagersApi).then((responseData: AxiosResponse) => {
            const schemaList = responseData.data.map((item: PensionFundManagersType) => {
                item.label = item.schemeName;
                item.value = item.pfmId;
                return item;
            })
            console.log(schemaList, 'schemaList')
            setPensionFundManagerList(schemaList)
        })
    }
  return (
    <div>
            <Row gutter={{ xs: 8, md: 60, lg: 116 }} className="mt-10">
                <Col xs={24} >
                    <Card
                        // style={{ borderRadius: 16, borderColor: ConfigStyle.colors.rectangleBorderColor }}
                    >
                        {tierTypeName === TierType.TIER_2 &&
                            <Form.Item
                                name={[TierType.TIER_2, "sameAsTierOne"]}
                                className="mb-0 md:px-4"
                                valuePropName="checked"
                            >
                                <Checkbox
                                    onChange={(e) =>
                                        handleFieldValues(e.target.checked)
                                    } className="text-base font-semibold">
                                    Same as Tier 1
                                </Checkbox>
                            </Form.Item>}
                        {/* <h2 className="scheme-detail-tier-card-title">{title}</h2> */}
                        {/* <h2 className="font-bold text-lg mb-2">Pension Fund Manager*</h2> */}
                        {/* <Form.Item className="hidden" name={[tierTypeName, "fundManagerID"]}></Form.Item> */}
                        {/* <Form.Item className="hidden" name={[tierTypeName, "id"]}></Form.Item> */}
                        <Row gutter={{ xs: 8, sm: 60, md: 116 }}>
                            <Col xs={24} md={12}>

                                <DropdownInput
                                    name={[tierTypeName, 'fundManagerName']}
                                    placeholder="Select Fund Manager"
                                    rules={[
                                        { required: true, message: `Please select Fund Manager for ${tierTypeName == TierType.TIER_2 ? 'Tier 2' : 'Tier 1'}` },
                                    ]}
                                    onSelect={selectPensionFundManagerHandler}
                                    onSearch={getFundManagerList}
                                    optionList={pensionFundManagerList}
                                    showSearch={true}
                                    disabled={sameAsTierOne && tierTypeName === TierType.TIER_2}
                                    style={{ fontSize: 18 }}
                                />
                            </Col>
                        </Row>
                        {/* <h2 className="font-bold text-xl">Investment Options*</h2> */}
                        <NPSTabs defaultSelectTab={corporateDetails.defaultSchemePreference} tierTypeName={tierTypeName} sameAsTierOne={sameAsTierOne} />
                    </Card>
                </Col>
            </Row>
    </div>
  )
}

export default npsSchemeDetailsFlowPractice