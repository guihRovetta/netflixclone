import React, {useCallback, useMemo, useRef, useState} from 'react';
import {FlatList, ScrollView, SectionList} from 'react-native';
import {useTheme} from '@shopify/restyle';
import {isPast} from 'date-fns';

import {BasicScreen} from '@internal/layouts';
import {useGetWhatsNew} from '@internal/hooks/media';
import {
  Box,
  Button,
  Image,
  ParentalRatingIndicator,
  Skeleton,
  Text,
} from '@internal/components';
import {Item} from '@internal/server/mirage-js';
import {capitalizeFirstCharacter, formatDate} from '@internal/helpers';
import {Theme} from '@internal/themes';

const HeaderIconButton = (props?: React.ComponentProps<typeof Button>) => (
  <Button _containerProps={{ml: 4}} {...props} />
);

const FixedSectionButton = ({
  isActive,
  ...rest
}: React.ComponentProps<typeof Button> & {isActive?: boolean}) => (
  <Button
    _containerProps={{
      mr: 4,
      py: 2,
      px: 4,
      borderRadius: 100,
      bg: isActive ? 'white' : undefined,
    }}
    _textProps={{color: isActive ? 'black' : undefined}}
    {...rest}
  />
);

const IMAGE_HEIGHT = 150;
const LEFT_OFFSET = 56;
const LEFT_HEADER_COMPONENT_HEIGHT = 56.5;
const FLATLIST_OBJ: Record<Item['group'], number> = {
  soon: 0,
  trending: 1,
  top10Movies: 2,
  top10TvShows: 3,
};

type WhatsNewSectionList = SectionList<Item, {title: string; data: Item[]}>;
type FixedSectionButtonProps = React.ComponentProps<typeof FixedSectionButton>;
type WhatsNewFlatList = FlatList<FixedSectionButtonProps>;

export const WhatsNewScreen = () => {
  const theme = useTheme<Theme>();

  const {data = [], isLoading} = useGetWhatsNew();

  const sectionListRef = useRef<WhatsNewSectionList>({} as WhatsNewSectionList);
  const flatListRef = useRef<WhatsNewFlatList>({} as WhatsNewFlatList);

  const [activeSection, setActiveSection] = useState<
    'soon' | 'trending' | 'top10Movies' | 'top10TvShows'
  >('soon');

  const memoizedFixedSectionButtons = useMemo(() => {
    const size = data?.length;

    const scrollToPosition = (sectionIndex = 0) => {
      sectionListRef?.current?.scrollToLocation({
        itemIndex: 1,
        sectionIndex,
        viewOffset: -5,
      });
    };

    const [soon, trending, top10TvShows, top10Movies]: typeof activeSection[] =
      ['soon', 'trending', 'top10TvShows', 'top10Movies'];

    return [
      {
        isActive: activeSection === soon,
        onPress: () => scrollToPosition(0),
        children: '🍿 Em breve',
      },
      {
        isActive: activeSection === trending,
        onPress: () => scrollToPosition(size - 3),
        children: '🔥 Todo mundo está asssistindo',
      },
      {
        isActive: activeSection === top10TvShows,
        onPress: () => scrollToPosition(size - 2),
        children: '🔟 Top 10 em séries',
      },
      {
        isActive: activeSection === top10Movies,
        onPress: () => scrollToPosition(size - 1),
        children: '🔟 Top 10 em filmes',
      },
    ] as FixedSectionButtonProps[];
  }, [activeSection]);

  const sectionListKeyExtractor = useCallback((item: Item) => item?.id, []);

  const sectionListRenderItem = useCallback(
    ({
      item,
      index,
      section,
    }: {
      item: Item;
      index: number;
      section: {title: string};
    }) => (
      <Button>
        <Box
          style={{
            marginLeft: section?.title ? LEFT_OFFSET : 0,
            marginTop:
              index === 0 && section?.title ? -LEFT_HEADER_COMPONENT_HEIGHT : 0,
          }}
          mb={8}
          position="relative">
          <Image
            source={{uri: item?.media}}
            style={{height: IMAGE_HEIGHT, borderRadius: theme.spacing[2]}}
            resizeMode="cover"
          />
          <ParentalRatingIndicator
            value={item?.parentalRating}
            _containerProps={{
              position: 'absolute',
              top: theme.spacing[2],
              right: theme.spacing[2],
            }}
          />

          <Box
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
            p={4}>
            <Box flex={1} mr={4}>
              <Image source={{uri: item?.logo}} resizeMode="contain" />
            </Box>

            <Box flexDirection="row">
              <Button
                _textProps={{variant: 'small', color: 'gray'}}
                _iconProps={{type: 'Feather', position: 'top', name: 'bell'}}
                _containerProps={{mr: 4}}>
                Receber aviso
              </Button>

              <Button
                _textProps={{variant: 'small', color: 'gray'}}
                _iconProps={{type: 'Feather', position: 'top', name: 'info'}}>
                Saiba mais
              </Button>
            </Box>
          </Box>

          <Text variant="regular" fontSize={14}>
            {isPast(new Date(item?.releaseDate))
              ? 'Já disponível!'
              : formatDate(item?.releaseDate, "'Disponível' 'em:' d 'de' MMMM")}
          </Text>

          <Box mt={3}>
            {item?.isOriginal && (
              <Box flexDirection="row" alignItems="center" mb={3}>
                <Image
                  source={{
                    uri: 'https://cdn.icon-icons.com/icons2/2699/PNG/512/netflix_logo_icon_170919.png',
                  }}
                  style={{height: 12, width: 12, marginRight: 8}}
                  resizeMode="contain"
                />

                <Text letterSpacing={3} fontSize={10} fontWeight="400">
                  {item?.type?.toUpperCase()}
                </Text>
              </Box>
            )}

            <Box mb={3}>
              <Text fontWeight="700" fontSize={18}>
                {item?.title}
              </Text>
            </Box>

            <Text color="gray" fontWeight="400">
              {item?.description}
            </Text>

            <Box flexDirection="row" flexWrap="wrap" mt={2}>
              {item?.genres?.map((genre, index) => (
                <Box
                  flexDirection="row"
                  alignItems="center"
                  key={`${item?.id}-${genre}`}>
                  <Text fontSize={12}>{capitalizeFirstCharacter(genre)}</Text>

                  {index < item?.genres?.length - 1 && (
                    <Box
                      width={3}
                      height={3}
                      bg="red"
                      borderRadius={3}
                      mx={1}
                    />
                  )}
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Button>
    ),
    [],
  );

  const sectionListRenderSectionHeader = useCallback(
    ({section}: {section: {title: string}}) => {
      if (!section?.title) return null;

      return (
        <Box width={LEFT_OFFSET} alignItems="center">
          <Text variant="regular" fontWeight="600">{`${formatDate(
            section?.title,
            'MMM',
          )?.toUpperCase()}.`}</Text>

          <Text variant="header" color="gray">
            {formatDate(section?.title, 'd')}
          </Text>
        </Box>
      );
    },
    [],
  );

  const flatListRenderItem = useCallback(
    ({item}: {item: FixedSectionButtonProps}) => (
      <FixedSectionButton {...item} />
    ),
    [],
  );

  return (
    <BasicScreen
      headerProps={{
        title: 'Novidades',
        actions: (
          <>
            <HeaderIconButton
              _iconProps={{name: 'cast', type: 'Feather', position: 'top'}}
            />
            <HeaderIconButton
              _iconProps={{name: 'search', type: 'Feather', position: 'top'}}
            />
            <HeaderIconButton
              _iconProps={{name: 'user', type: 'Feather', position: 'top'}}
            />
          </>
        ),
        after: (
          <>
            {isLoading ? (
              <Skeleton style={{marginHorizontal: theme.spacing['4']}}>
                <Box
                  flexDirection="row"
                  justifyContent="space-between"
                  alignItems="center">
                  {Array.from({length: 3}, (_, index) => (
                    <Skeleton.Line
                      key={`skeleton-fixed-button-${index}`}
                      width={theme.spacing['10']}
                      height={theme.spacing['9']}
                      style={{
                        borderRadius: 100,
                        marginRight: theme.spacing['4'],
                      }}
                    />
                  ))}
                </Box>
              </Skeleton>
            ) : (
              <FlatList
                ref={flatListRef}
                data={memoizedFixedSectionButtons}
                renderItem={flatListRenderItem}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{marginHorizontal: theme.spacing[4]}}
              />
            )}
          </>
        ),
      }}>
      {isLoading ? (
        <ScrollView contentContainerStyle={{padding: 16}}>
          {Array.from({length: 3}, (_, index) => (
            <Box key={`skeleton-section-list-item-${index}`} mb={8}>
              <Skeleton Left={Skeleton.Media}>
                <Skeleton.Line height={IMAGE_HEIGHT} />

                <Box
                  flexDirection="row"
                  justifyContent="space-between"
                  alignItems="center">
                  <Skeleton.Line
                    width={theme.spacing['8']}
                    height={theme.spacing['6']}
                  />
                  <Skeleton.Line
                    width={theme.spacing['6']}
                    height={theme.spacing['10']}
                  />
                  <Skeleton.Line
                    width={theme.spacing['6']}
                    height={theme.spacing['10']}
                  />
                </Box>

                <Skeleton.Line width={theme.spacing['8']} />
                <Skeleton.Line />
                <Skeleton.Line />
                <Skeleton.Line />
              </Skeleton>
            </Box>
          ))}
        </ScrollView>
      ) : (
        <SectionList
          ref={sectionListRef}
          sections={data}
          keyExtractor={sectionListKeyExtractor}
          renderItem={sectionListRenderItem}
          renderSectionHeader={sectionListRenderSectionHeader}
          stickySectionHeadersEnabled={true}
          showsVerticalScrollIndicator={false}
          style={{
            marginTop: theme.spacing[4],
            marginBottom: theme.spacing[20],
            marginHorizontal: theme.spacing[4],
          }}
          onViewableItemsChanged={event => {
            const {group}: {group: Item['group']} =
              event?.viewableItems[0]?.item || {};

            if (group && group !== activeSection) {
              setActiveSection(group);
              flatListRef?.current?.scrollToIndex({
                index: FLATLIST_OBJ[group],
              });
            }
          }}
          viewabilityConfig={{
            itemVisiblePercentThreshold: 25,
          }}
        />
      )}
    </BasicScreen>
  );
};
