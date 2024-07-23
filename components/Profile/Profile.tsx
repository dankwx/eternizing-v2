import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import UserProfile from './GetUsername'

interface ProfileProps {
    username: string
    displayName: string
    description: string

    updateUsernameAction?: (
        formData: FormData
    ) => Promise<{ success: boolean; newUsername?: string }>
    updateDescriptionAction?: (
        formData: FormData
    ) => Promise<{ success: boolean; newDescription?: string | null }>
    isOwnProfile: boolean
    totalFollowers: number
    totalFollowing: number
    followingId: string
    initialIsFollowing: boolean
}

export default function Profile({
    username,
    displayName,
    description,
    updateUsernameAction,
    updateDescriptionAction,
    isOwnProfile,
    totalFollowers,
    totalFollowing,
    followingId,
    initialIsFollowing,
}: ProfileProps) {
    return (
        <div className="mt-16 pt-4">
            <div className="flex">
                <Avatar className="mr-4 h-20 w-20">
                    <AvatarImage src="data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20762%20762%22%20fill%3D%22none%22%20shape-rendering%3D%22auto%22%3E%3Cmetadata%20xmlns%3Ardf%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%22%20xmlns%3Axsi%3D%22http%3A%2F%2Fwww.w3.org%2F2001%2FXMLSchema-instance%22%20xmlns%3Adc%3D%22http%3A%2F%2Fpurl.org%2Fdc%2Felements%2F1.1%2F%22%20xmlns%3Adcterms%3D%22http%3A%2F%2Fpurl.org%2Fdc%2Fterms%2F%22%3E%3Crdf%3ARDF%3E%3Crdf%3ADescription%3E%3Cdc%3Atitle%3EAdventurer%3C%2Fdc%3Atitle%3E%3Cdc%3Acreator%3ELisa%20Wischofsky%3C%2Fdc%3Acreator%3E%3Cdc%3Asource%20xsi%3Atype%3D%22dcterms%3AURI%22%3Ehttps%3A%2F%2Fwww.figma.com%2Fcommunity%2Ffile%2F1184595184137881796%3C%2Fdc%3Asource%3E%3Cdcterms%3Alicense%20xsi%3Atype%3D%22dcterms%3AURI%22%3Ehttps%3A%2F%2Fcreativecommons.org%2Flicenses%2Fby%2F4.0%2F%3C%2Fdcterms%3Alicense%3E%3Cdc%3Arights%3ERemix%20of%20%E2%80%9EAdventurer%E2%80%9D%20(https%3A%2F%2Fwww.figma.com%2Fcommunity%2Ffile%2F1184595184137881796)%20by%20%E2%80%9ELisa%20Wischofsky%E2%80%9D%2C%20licensed%20under%20%E2%80%9ECC%20BY%204.0%E2%80%9D%20(https%3A%2F%2Fcreativecommons.org%2Flicenses%2Fby%2F4.0%2F)%3C%2Fdc%3Arights%3E%3C%2Frdf%3ADescription%3E%3C%2Frdf%3ARDF%3E%3C%2Fmetadata%3E%3Cmask%20id%3D%22viewboxMask%22%3E%3Crect%20width%3D%22762%22%20height%3D%22762%22%20rx%3D%220%22%20ry%3D%220%22%20x%3D%220%22%20y%3D%220%22%20fill%3D%22%23fff%22%20%2F%3E%3C%2Fmask%3E%3Cg%20mask%3D%22url(%23viewboxMask)%22%3E%3Crect%20fill%3D%22%23c0aede%22%20width%3D%22762%22%20height%3D%22762%22%20x%3D%220%22%20y%3D%220%22%20%2F%3E%3Cpath%20d%3D%22M396%20164.8a224.8%20224.8%200%200%201%20104.8%2042.4c6.2%204.9%2012.5%209.4%2018%2015a225.4%20225.4%200%200%201%2071.8%20149%2058.5%2058.5%200%200%201%2050.9%2042.2%2071%2071%200%200%201-27.6%2076.5c-11%207.7-24.5%2012-38%2011.7-5%200-10-1.6-15-1.8-1.9%202.2-3.3%204.9-4.8%207.3A223.3%20223.3%200%200%201%20389%20609.8c-11%20.7-21.9%202-33%20.7a223.7%20223.7%200%200%201-178.8-342.3A223.4%20223.4%200%200%201%20352%20163.5c14.6-1.4%2029.4-.3%2044%201.3Z%22%20fill%3D%22%23000%22%2F%3E%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M498.8%20213.2A216%20216%200%200%200%20363%20169c-13-.2-26.2%201.6-39%204a218%20218%200%200%200-113.6%20365.5%20218.5%20218.5%200%200%200%20260.4%2040.2c35-18.8%2064.2-47.3%2084.4-81.5l-3-1.6c-2.8-1.4-5.7-3-8-5-2.2-2-.3-5.8%202.7-4.7%201.5.7%203%201.6%204.4%202.4a55%2055%200%200%200%2059.6-3.6%2064.5%2064.5%200%200%200%2025-69.8%2053.1%2053.1%200%200%200-24-31%2052.6%2052.6%200%200%200-47-2.8c-1.6.8-3.4%201.5-5%201.3-2.5-.2-2.8-4.2-.6-5.2%208-4%2016.5-5.6%2025.4-6.4a217%20217%200%200%200-72-146.4c-4.4-4-8.7-8.1-13.9-11.3Zm107.6%20196.2c2-1.2%201.3-5.1-1.4-5-2%200-4.2.8-6.2%201.6l-1.4.4a95.1%2095.1%200%200%200-25.5%2012.4c-2.2%202-2.2%204.4.1%206.2a92%2092%200%200%200%205.2%202.8%2036%2036%200%200%201%2013%209.2c-.2%201.9-2%203.4-3.4%204.5l-.2.2c-3.9%203-8.8%205-13.6%207-2.5%201-4.9%202-7.1%203.1-1.7.8-2.6%202.2-1.6%203.9%201%202%203.2%201.1%205%20.5l.6-.2%205.4-2.3c5.4-2.3%2011-4.5%2015.4-8%202.7-2.1%205.1-5.1%205.4-8.7-.5-3.4-2.7-5.7-5.3-7.8a83%2083%200%200%200-11.6-7.2l-1.1-.6c5.4-3%2010.8-5.6%2016.6-7.7l5-1.7a52%2052%200%200%200%206.7-2.6Z%22%20fill%3D%22%23f2d3b1%22%2F%3E%3Cg%20transform%3D%22translate(-161%20-83)%22%3E%3Cpath%20d%3D%22M556%20424a65.3%2065.3%200%200%201%2065.5%2073.8c-.4%202.7-3.2%203.6-5.5%203.8-23%201-45.4%203.7-68%206.3-13.2%201-26.2%202.8-39.2%204.6-4.6.5-8.6%201.7-13.1%200A65%2065%200%200%201%20556%20424Z%22%20fill%3D%22%23000%22%2F%3E%3Cpath%20d%3D%22M566.2%20430.5a60%2060%200%200%201%2050.2%2060.5c-.2%201.4.1%203.5-.7%204.6-4.2.7-8.5.7-12.7%201.1-18.4%201.2-36.6%203.4-54.9%205.6a31%2031%200%200%200%202.6-10.3%2024.8%2024.8%200%200%200-39.5-20.8%2024.4%2024.4%200%200%200-9.8%2020.8c0%206%202.6%2011.2%206.4%2015.7l-7.3.8a59.2%2059.2%200%200%201%2065.7-78Z%22%20fill%3D%22%23fff%22%2F%3E%3Cpath%20d%3D%22M416%20455a55%2055%200%200%201%2023.8%2062c-4%201.1-7.7.7-11.8.7-25.4-.3-50.6-.3-76%201.4-5.6-.3-13%201.8-17.8-1.4a55.2%2055.2%200%200%201%2081.7-62.7Z%22%20fill%3D%22%23000%22%2F%3E%3Cpath%20d%3D%22M410.4%20458.5c19%2010.1%2029.7%2032.9%2024.7%2053.9l-5.7.1a24.4%2024.4%200%200%200%202.8-15.5%2022.4%2022.4%200%200%200-15.4-17.7%2022%2022%200%200%200-28.5%2020.7c-.3%204.4%201%208.2%202.8%2012.1-15.4.1-30.7%201-46.1%202-1.8-.2-5.8.5-6.1-2a49%2049%200%200%201%2071.6-53.6Z%22%20fill%3D%22%23fff%22%2F%3E%3C%2Fg%3E%3Cg%20transform%3D%22translate(-161%20-83)%22%3E%3Cpath%20d%3D%22M397%20373.1c6.9.2%2014.2%202.9%2018%209%201%201.4.6%203.6.7%205.3-6.3.2-12.5.4-18.6%201.9a112%20112%200%200%200-41.7%2020.1%2090%2090%200%200%200-22%2023c-1.3%202.3-2.3%205.1-4.2%207-1.2.2-2.6.2-3.8.3%200-1.8-.3-3.4.2-5.2a88.7%2088.7%200%200%201%2038-50.8c10-5.8%2021.8-11%2033.5-10.6ZM578.5%20411.7a71.4%2071.4%200%200%201%2030%2010l-.2%204.7c-4%201.6-7.3-.1-11.3-.8-6.8-1.2-13.9-1.2-20.8-1a197.5%20197.5%200%200%200-84%2023.7c-1.4.6-3%201-4.4%201.5-2.6-5.4-3.6-11-.1-16.2%205-7.6%2015.2-12.4%2023.6-15.4%2021.3-7.4%2044.9-9%2067.2-6.5Z%22%20fill%3D%22%23000%22%2F%3E%3C%2Fg%3E%3Cg%20transform%3D%22translate(-161%20-83)%22%3E%3Cpath%20d%3D%22M517.9%20557.3c2.3.2%203.1%202.7%202.3%204.7-1.4%203.5-3.2%207-4.7%2010.5-8.4%2019.3-19.5%2037-31.8%2054.2-1.4%201.8-2.9%204-4.8%205.2-3%20.8-6.1.8-8.6-1.1a129.4%20129.4%200%200%201-24.4-22.8c-7-7.8-13.4-16-18.8-25.1-1-2.2-2.6-4.5-1.2-6.9%201-1.5%203.2-2%204.9-2.5%2011-3.1%2022.1-6.5%2033.3-9.3a235%20235%200%200%201%2036-5.7c5.8-.5%2011.8-1.4%2017.8-1.2Z%22%20fill%3D%22%23000%22%2F%3E%3Cpath%20d%3D%22M513.8%20563c-9%2021.2-21%2040.8-34.3%2059.5-1%201.1-2.2%202.8-3.7%203-2.2.6-3.7-.8-5.4-1.9a155%20155%200%200%201-22.7-22.3A137.4%20137.4%200%200%201%20431%20579c15-4%2029.9-8.6%2045.1-11.4%2012.5-2.5%2025-3.3%2037.6-4.6Z%22%20fill%3D%22%238F2E45%22%2F%3E%3C%2Fg%3E%3Cg%20transform%3D%22translate(-161%20-83)%22%3E%3C%2Fg%3E%3Cg%20transform%3D%22translate(-161%20-83)%22%3E%3C%2Fg%3E%3Cg%20transform%3D%22translate(-161%20-83)%22%3E%3Cpath%20d%3D%22M468.5%20215.1c7%201.1%2013.9%201%2020.8%202.5%2012%202.4%2024%205.8%2036%208.9%2032.6%208.8%2065.4%2016.6%2098.7%2022.4%2021.5%203.8%2044%206.9%2064.6%2014.5%2011.4%204%2022.3%209.1%2032.6%2015.3%204.8%203.7%208.7%209%2012.1%2014a255.4%20255.4%200%200%201%2031.3%2068.7%20497.2%20497.2%200%200%201%2016%2064.6c2.2%207.6.6%2016.3-.6%2024-3.4%2019-10%2037-18.7%2054.3a307%20307%200%200%201-38.5%2056.5A187.8%20187.8%200%200%201%20691%20591a129.6%20129.6%200%200%201-31.3%2017.7c-1.7.4-3%201.4-4.3-.3-1.3-1-.3-3.6%200-5%203.4-11.4%205.8-23%207.3-34.7%201.2-8.9%201.2-17.9%201.7-26.8-.2-10-.6-20-2-30a195.8%20195.8%200%200%200-36.4-91.2c-2.1%2030.3.4%2061.3%208.5%2090.6.9%203.4%202.4%206.4%203.7%209.6.4%203.3-2.2%204.6-5%203.5a276.5%20276.5%200%200%201-139.1-109.7%20162%20162%200%200%200-16%2026.4%20190.4%20190.4%200%200%200-16.5%2096c-1%201.1-2%203.5-3.8%203.6-2%20.3-3-1.4-4-2.7-5.6-7.5-11-15.1-15.8-23.2a332.2%20332.2%200%200%201-28.5-65.4c-7.1-23.2-13-47.3-15.1-71.6a287.3%20287.3%200%200%200-51.6%2088.8%20169%20169%200%200%200-10.6%2049.3c0%203.2-3.7%203.1-5.4%201a135.3%20135.3%200%200%201-25-36c-12.9-27-17.6-57.3-15-87l-11.6%208.3a134.4%20134.4%200%200%200-27.4%2028.6c-1.4%201.8-2.2%203.7-4.8%203.3-2.8-1-1.1-4.1-1-6.2%203.1-12.7%208.4-25%2014.4-36.5a287%20287%200%200%201%2059.7-75.3c29-26.3%2063.2-48.6%20100.5-61.2%204.6-9%209.8-18.2%2016-26.2a37.8%2037.8%200%200%201%2016.6-12.6c6.3-2.1%2012.7-2.1%2019.2-1Z%22%20fill%3D%22%23000%22%2F%3E%3Cg%20fill%3D%22%23e5d7a3%22%3E%3Cpath%20d%3D%22M471.5%20221c16.5%201.2%2033.3%206.2%2049.4%2010.4%2028%207.5%2056%2014.5%2084.6%2020%2026.7%205.5%2054%208%2079.4%2016.8%2010.2%203.5%2020.6%207.4%2029.8%2013%207%204.4%2011.2%2010.8%2015.7%2017.4%209.5%2015%2017.2%2031.1%2023.2%2047.9a565.8%20565.8%200%200%201%2021.5%2079.3c1.5%207.8.6%2015.2-.8%2023-2.2%2012-5.6%2023.8-10.3%2035.2-9%2023-22.5%2044-37.7%2063.3a270%20270%200%200%201-25.6%2028.4%20155.5%20155.5%200%200%201-38.7%2026.5%20228%20228%200%200%200%205.6-95.3%20195.3%20195.3%200%200%200-41.9-95.7c-1.5-1.9-3.9-1.3-4.9.7-2.9%2035.8-1%2071.2%2010.1%20105.6a270.4%20270.4%200%200%201-130.5-103.9c-18.7-29-31-61.9-33.9-96.4-.2-2.6-2.4-3.7-4.7-2.6-1.4%201.7-1%203.5-1%205.5%203.2%2031.6%2013.9%2061.9%2030%2089.2-5%207.2-10%2014.4-14.2%2022.3a185%20185%200%200%200-20.3%2068.4c-1.3%2010.4-.9%2020.6-.5%2031a221.1%20221.1%200%200%201-24.4-41.5c-14-30-23.5-62-29-94.6a307%20307%200%200%201-3.8-41.9%20229%20229%200%200%201%206.4-51%20218%20218%200%200%201%2023.5-56.5c5-8.1%2011-17.9%2019.5-22.5%207-4.2%2015.8-3%2023.5-2Z%22%2F%3E%3Cpath%20d%3D%22M413%20262.6a216.8%20216.8%200%200%200-20.2%2090.4c0%205.7.6%2011.4.7%2017.1a295.5%20295.5%200%200%200-47%2072.4c-7.5%2016.5-13.8%2034-17.4%2051.7-1%204.7-1.4%209.5-2.3%2014.2-25.3-29.1-36.7-69.2-34.6-107.4%200-4.8%201.4-8.7-.2-13-1.4-1.4-3.6-.9-5.1%200-4%202-7.7%205-11.4%207.5-9%206-16.2%2013.1-23.7%2020.8a174%20174%200%200%201%2013-27.7c19.6-34.5%2048-64.4%2079.6-88.2a275.5%20275.5%200%200%201%2068.6-37.8Z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3Cg%20transform%3D%22translate(-161%20-83)%22%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" />
                    <AvatarFallback>PF</AvatarFallback>
                </Avatar>
                <UserProfile
                    username={username}
                    displayName={displayName}
                    updateUsernameAction={updateUsernameAction}
                    isOwnProfile={isOwnProfile}
                    description={description}
                    updateDescriptionAction={updateDescriptionAction}
                    totalFollowers={totalFollowers}
                    totalFollowing={totalFollowing}
                    followingId={followingId}
                    initialIsFollowing={initialIsFollowing}
                />
            </div>
        </div>
    )
}
