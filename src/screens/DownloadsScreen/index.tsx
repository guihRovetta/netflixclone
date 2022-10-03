import React from 'react';
import {ScrollView} from 'react-native';

import {Box, Button, Text} from '@internal/components';
import {BasicScreen} from '@internal/layouts';

const DownloadButton = ({...rest}: React.ComponentProps<typeof Button>) => (
  <Button
    {...rest}
    _containerProps={{py: 2, px: 3, borderRadius: 4, ...rest?._containerProps}}
    _textProps={{fontWeight: '600', ...rest?._textProps}}
  />
);

export const DownloadsScreen = () => (
  <BasicScreen
    headerProps={{
      title: 'Downloads',
      after: (
        <Box mx={6}>
          <Button
            _iconProps={{name: 'settings', type: 'Feather', position: 'left'}}
            _textProps={{color: 'white'}}>
            Smart Downloads
          </Button>
        </Box>
      ),
    }}>
    <ScrollView contentContainerStyle={{height: '100%', paddingBottom: 80}}>
      <Box alignItems="center" justifyContent="space-between" flex={1} mx={6}>
        <Box mt={12}>
          <Text variant="subheader" textAlign="center">
            Conheça o Downloads para você
          </Text>

          <Text variant="body" textAlign="center" mt={4}>
            Vamos baixar uma selção personalizada de filmes e séries para você
            sempre ter um título para assistir no seu aparelho
          </Text>
        </Box>

        <Box width={200} height={200} borderRadius={200} my={6} bg="gray" />

        <Box width="100%">
          <DownloadButton _containerProps={{bg: 'blue', mx: 4}}>
            Configurar
          </DownloadButton>

          <DownloadButton
            _containerProps={{mt: 4, bg: 'white', mx: 12}}
            _textProps={{color: 'background'}}>
            Veja o que você pode baixar
          </DownloadButton>
        </Box>
      </Box>
    </ScrollView>
  </BasicScreen>
);
