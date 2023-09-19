import { React, useState, useEffect } from "react";
import {
<<<<<<< Updated upstream
  Container,
  Box,
  HStack,
  Radio,
  RadioGroup,
  VStack,
  Text,
  Image,
  Stat,
  StatLabel,
  StatNumber,
  StatArrow,
  StatHelpText,
=======
    Container,
    Box,
    HStack,
    Radio,
    RadioGroup,
    VStack,
    Text,
    Image,
    Stat,
    StatLabel,
    StatNumber, Item,
    StatArrow,
    StatHelpText, Badge
>>>>>>> Stashed changes
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import ErrorComponent from "./ErrorComponent";
import Coins from "./Coins";
import Loader from "./Loader";
import { server } from "../index";
import axios from "axios";

const CoinDetails = () => {
<<<<<<< Updated upstream
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const [currency, setCurrency] = useState("inr");
  const currencySymbol =
    currency === "inr" ? "₹" : currency === "eur" ? "€" : "$";
  const params = useParams();
  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const { data } = await axios.get(
          `https://api.coingecko.com/api/v3/coins/${params.id}`
        );
        console.log("Coin data", data);
        setCoins(data);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchCoins();
  }, [params.id]);

  if (error) return <ErrorComponent message={"Error While Fetching Coins"} />;

  return (
    <Container maxW={"container.xl"}>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Box width={"full"} borderWidth={1}>
            asdas
          </Box>
          <RadioGroup value={currency} onChange={setCurrency} p={"8"}>
            <HStack spacing="4">
              <Radio value="inr"> INR </Radio>
              <Radio value="usd"> USD </Radio>
              <Radio value="eur"> EUR </Radio>
            </HStack>
          </RadioGroup>
          <VStack spacing={"4"} p={"16"} alignItems={"flex-start"}>
            <Text fontSize={"small"} alignSelf={"center"} opacity={0.7}>
              Last Updated On {""}
              {Date(coins?.market_data.last_updated)?.split("G")[0]}
            </Text>
            <Image
              src={coins?.image?.large}
              w={"16"}
              h={"16"}
              objectFit={"contain"}
            />
            <Stat>
              <StatLabel> {coins?.name} </StatLabel>
              <StatNumber>
                {currencySymbol}
                {coins?.market_data?.current_price[currency]}
              </StatNumber>
              <StatHelpText>
                <StatArrow type="decrease" />
                25%
              </StatHelpText>
            </Stat>
          </VStack>
        </>
      )}
    </Container>
  );
};

export default CoinDetails;
=======
    const [coins, setCoins] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const [currency, setCurrency] = useState("inr");
    const currencySymbol =
        currency === "inr" ? "₹" : currency === "eur" ? "€" : "$";
    const params = useParams();
    useEffect(() => {
        const fetchCoins = async () => {
            try {
                const { data } = await axios.get(
                    `https://api.coingecko.com/api/v3/coins/${params.id}`
                );
                console.log("Coin data", data);
                setCoins(data);
                setLoading(false);
            } catch (error) {
                setError(true);
                setLoading(false);
            }
        };
        fetchCoins();
    }, [params.id]);

    if (error) return <ErrorComponent message={"Error While Fetching Coins"} />;

    return (
        <Container maxW={"container.xl"}>
            {loading ? (
                <Loader />
            ) : (
                <>
                    <Box width={"full"} borderWidth={1}>
                        asdas
                    </Box>
                    <RadioGroup value={currency} onChange={setCurrency} p={"8"}>
                        <HStack spacing="4">
                            <Radio value="inr"> INR </Radio>
                            <Radio value="usd"> USD </Radio>
                            <Radio value="eur"> EUR </Radio>
                        </HStack>
                    </RadioGroup>
                    <VStack spacing={"4"} p={"16"} alignItems={"flex-start"}>
                        <Text fontSize={"small"} alignSelf={"center"} opacity={0.7}>
                            Last Updated On {""}
                            {Date(coins?.market_data.last_updated)?.split("G")[0]}
                        </Text>
                        <Image
                            src={coins?.image?.large}
                            w={"16"}
                            h={"16"}
                            objectFit={"contain"}
                        />
                        <Stat>
                            <StatLabel> {coins?.name} </StatLabel>
                            <StatNumber>
                                {currencySymbol}
                                {coins?.market_data?.current_price[currency]}
                            </StatNumber>
                            <StatHelpText>
                                <StatArrow type={coins.market_data.price_change_percentage_24th > 0
                                    ? "increase"
                                    : "decrease"
                                }
                                />
                                {coins.market_data.price_change_percentage_24th}%
                            </StatHelpText>
                        </Stat>
                        <Badge fontSize={"2xl"} bgColor={"blackAlpha.800"}
                            color={"white"}>
                            {`#${coins.market_cap_rank}`}</Badge>

                        <CustomBar high={`${currencySymbol}${coins.market_data.high_24h[currency]}`}
                            low={`${currencySymbol}${coins.market_data.low_24h[currency]}`} />
                        <Box w={"full"} p={"4"}>
                            <Item title={"Max Supply"} value={23231} />
                        </Box>

                    </VStack>
                </>
            )
            }
        </Container>
    )
}
const Item = ({ title, value }) => (
    <HStack justifyContent={"space-between"} w={"full"} my={"4"}>
        <Text fontFamily={"Bebas Neue"} letterSpacing={"widest"}>
            {title}

        </Text>
    </HStack>
)




const CustomBar = ({ high, low }) => (
    <VStack w={"full"}>
        <progress value={50} colorScheme={"teal"} w={"full"} />
        <HStack justifyContent={"space-between"} w={"full"}>
            <Badge children={low} colorScheme='red' />
            <Badge children={high} colorScheme='green' />
            <Text fontSize={"sm"}>24H Range</Text>
        </HStack>
    </VStack>
)

export default CoinDetails
>>>>>>> Stashed changes
