import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button,
  TouchableOpacity,
  Alert,
} from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
  const [result, set_result] = React.useState('|');


const input = (symbol) => {

  if (result == '|') {
              set_result(symbol);
            } else {
              set_result(result + symbol);
            }

}
  return (
    <View

    >
     

      <View
        style={{
          display: 'flex',
          flexDirection: 'row-reverse',
          width: '100%',
          height: 250,
          alignSelf: 'stretch',
          alignItems: 'flex-end',
        }}>
        <Text
          style={{
            fontSize: 100,
          }}>
          {result}
        </Text>
      </View>

      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          width: '100%',
          height: 100,
          alignSelf: 'stretch',
        }}>
        <TouchableOpacity
          onPress={() => {
            set_result('|');
          }}
          style={{
            padding: 5,
            width: '25%',
          }}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              // width: "25%",
              // height: '100%',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'grey',

              height: '100%',
            }}>
            <Text
              style={{
                fontSize: 50,
              }}>
              C
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => Alert.alert('Simple Button pressed')}
          style={{
            padding: 5,
            width: '25%',
          }}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              // width: "25%",
              // height: '100%',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'grey',

              height: '100%',
            }}>
            <Text
              style={{
                fontSize: 50,
              }}>
              +/-
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => Alert.alert('Simple Button pressed')}
          style={{
            padding: 5,
            width: '25%',
          }}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              // width: "25%",
              // height: '100%',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'grey',

              height: '100%',
            }}>
            <Text
              style={{
                fontSize: 50,
              }}>
              %
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => input('/')}
          style={{
            padding: 5,
            width: '25%',
          }}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              height: '100%',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'orange',
            }}>
            <Text
              style={{
                fontSize: 50,
              }}>
              ÷
            </Text>
          </View>
        </TouchableOpacity>
      </View>

      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          width: '100%',
          height: 100,
          alignSelf: 'stretch',
        }}>
        <TouchableOpacity
          onPress={() => input('7')}
          style={{
            padding: 5,
            width: '25%',
          }}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              // width: "25%",
              // height: '100%',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'grey',

              height: '100%',
            }}>
            <Text
              style={{
                fontSize: 50,
              }}>
              7
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => input('8')}
          style={{
            padding: 5,
            width: '25%',
          }}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              // width: "25%",
              // height: '100%',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'grey',

              height: '100%',
            }}>
            <Text
              style={{
                fontSize: 50,
              }}>
              8
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => input('9')}
          style={{
            padding: 5,
            width: '25%',
          }}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              // width: "25%",
              // height: '100%',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'grey',

              height: '100%',
            }}>
            <Text
              style={{
                fontSize: 50,
              }}>
              9
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => input('*')}
          style={{
            padding: 5,
            width: '25%',
          }}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              height: '100%',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'orange',
            }}>
            <Text
              style={{
                fontSize: 50,
              }}>
              х
            </Text>
          </View>
        </TouchableOpacity>
      </View>

      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          width: '100%',
          height: 100,
          alignSelf: 'stretch',
        }}>
        <TouchableOpacity
          onPress={() => input('4')}
          style={{
            padding: 5,
            width: '25%',
          }}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              // width: "25%",
              // height: '100%',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'grey',

              height: '100%',
            }}>
            <Text
              style={{
                fontSize: 50,
              }}>
              4
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => input('5')}
          style={{
            padding: 5,
            width: '25%',
          }}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              // width: "25%",
              // height: '100%',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'grey',

              height: '100%',
            }}>
            <Text
              style={{
                fontSize: 50,
              }}>
              5
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => input('6')}
          style={{
            padding: 5,
            width: '25%',
          }}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              // width: "25%",
              // height: '100%',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'grey',

              height: '100%',
            }}>
            <Text
              style={{
                fontSize: 50,
              }}>
              6
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => input('-')}
          style={{
            padding: 5,
            width: '25%',
          }}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              height: '100%',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'orange',
            }}>
            <Text
              style={{
                fontSize: 50,
              }}>
              -
            </Text>
          </View>
        </TouchableOpacity>
      </View>

      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          width: '100%',
          height: 100,
          alignSelf: 'stretch',
        }}>
        <TouchableOpacity
          onPress={() => input('1')}
          style={{
            padding: 5,
            width: '25%',
          }}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              // width: "25%",
              // height: '100%',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'grey',

              height: '100%',
            }}>
            <Text
              style={{
                fontSize: 50,
              }}>
              1
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => input('2')}
          style={{
            padding: 5,
            width: '25%',
          }}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              // width: "25%",
              // height: '100%',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'grey',

              height: '100%',
            }}>
            <Text
              style={{
                fontSize: 50,
              }}>
              2
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => input('3')}
          style={{
            padding: 5,
            width: '25%',
          }}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              // width: "25%",
              // height: '100%',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'grey',

              height: '100%',
            }}>
            <Text
              style={{
                fontSize: 50,
              }}>
              3
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => input('+')}
          style={{
            padding: 5,
            width: '25%',
          }}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              height: '100%',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'orange',
            }}>
            <Text
              style={{
                fontSize: 50,
              }}>
              +
            </Text>
          </View>
        </TouchableOpacity>
      </View>

      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          width: '100%',
          height: 100,
          alignSelf: 'stretch',
        }}>
        <TouchableOpacity
          onPress={() => input('0')}
          style={{
            padding: 5,
            width: '50%',
          }}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              // width: "25%",
              // height: '100%',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'grey',

              height: '100%',
            }}>
            <Text
              style={{
                fontSize: 50,
              }}>
              0
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => input('.')}
          style={{
            padding: 5,
            width: '25%',
          }}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              // width: "25%",
              // height: '100%',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'grey',

              height: '100%',
            }}>
            <Text
              style={{
                fontSize: 50,
              }}>
              .
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            set_result(eval(result));
          }}
          style={{
            padding: 5,
            width: '25%',
          }}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              height: '100%',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'orange',
            }}>
            <Text
              style={{
                fontSize: 50,
              }}>
              =
            </Text>
          </View>
        </TouchableOpacity>

        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    // padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
